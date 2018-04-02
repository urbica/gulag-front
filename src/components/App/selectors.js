import Immutable from 'immutable';
import { createSelector } from 'reselect';
import layers from '../../config/layers';

export const langSelector = state => state.getIn(['intl', 'locale']);
export const campsSelector = state => state.getIn(['data', 'camps']);
export const mapStyleSelector = state => state.getIn(['data', 'mapStyles']);
export const typesSelector = state => state.getIn(['data', 'types']);
export const periodsSelector = state => state.getIn(['data', 'periods']);
export const currentYearSelector = state => state.getIn(['ui', 'currentYear']);
export const viewportSelector = state => state.getIn(['ui', 'viewport']);
export const isShowAllPrisonsSelector = state => state.getIn(['ui', 'isShowAllPrisons']);
export const isCampFiltersOpenSelector = state => state.getIn(['ui', 'isCampFiltersOpen']);
export const campTypeFiltersSelector = state => state.getIn(['ui', 'campTypeFilters']);

const emptyGeoJSONSource = Immutable.fromJS({
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  }
});

const prisonSourceSelector = createSelector(
  campsSelector,
  langSelector,
  campTypeFiltersSelector,
  // isShowAllPrisonsSelector,
  // currentYearSelector,
  (prisons, lang, campTypeFilters /*  isShowAllPrisons, currentYear */) => {
    if (!prisons) {
      return emptyGeoJSONSource;
    }

    const features = prisons
      .toList()
      .filter(
        camp =>
          camp.getIn(['published', lang]) && campTypeFilters.get(camp.get('typeId').toString())
      )
      .reduce(
        (acc, prison) =>
          prison.get('locations').reduce((oldFeatures, feature) => {
            // if (feature.getIn(['properties', currentYear.toString()]) || isShowAllPrisons) {
            const newProperties = Immutable.Map({
              id: prison.get('id'),
              ruName: prison.getIn(['title', 'ru']),
              enName: prison.getIn(['title', 'en']),
              deName: prison.getIn(['title', 'de']),
              typeId: prison.get('typeId'),
              peoples: 5000
              // peoples: feature.getIn(['properties', currentYear.toString(), 'peoples'])
            });

            return oldFeatures.push(feature.set('properties', newProperties));
            // }
            // return oldFeatures;
          }, acc),
        Immutable.List()
      );

    return emptyGeoJSONSource.setIn(['data', 'features'], features);
  }
);

// eslint-disable-next-line import/prefer-default-export
export const finalStyleSelector = createSelector(
  mapStyleSelector,
  prisonSourceSelector,
  currentYearSelector,
  langSelector,
  (mapStyle, prisonSource, currentYear, lang) => {
    if (!mapStyle) {
      return null;
    }

    const ussrLayerId = mapStyle.get('layers').findIndex(layer => layer.get('id') === 'USSR');

    const citiesLayerId = mapStyle
      .get('layers')
      .findIndex(layer => layer.get('id') === 'city all last');

    const getUSSRBoundaryFilterByYear = () => {
      if (currentYear !== 1960) {
        return Immutable.fromJS([
          'all',
          ['<=', 'year_start', currentYear],
          ['>', 'year_end', currentYear]
        ]);
      }

      return Immutable.fromJS(['all', ['==', 'year_end', currentYear]]);
    };
    const citiesFilterByYear = Immutable.fromJS(['all', ['==', 'year', currentYear]]);

    const citiesLang = `{historical_name${lang === 'ru' ? '' : '_en'}}`;

    return mapStyle
      .setIn(['sources', 'prisons'], prisonSource)
      .setIn(['layers', ussrLayerId, 'filter'], getUSSRBoundaryFilterByYear())
      .setIn(['layers', citiesLayerId, 'filter'], citiesFilterByYear)
      .setIn(['layers', citiesLayerId, 'layout', 'text-field'], citiesLang)
      .update('layers', previousLayers => previousLayers.concat(layers));
  }
);
