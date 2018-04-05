import Immutable, { Map, List } from 'immutable';
import { createSelector } from 'reselect';

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

export const prisonSourceSelector = createSelector(
  campsSelector,
  langSelector,
  campTypeFiltersSelector,
  // isShowAllPrisonsSelector,
  currentYearSelector,
  (camps, lang, campTypeFilters, /* isShowAllPrisons, */ currentYear) => {
    if (!camps) {
      return emptyGeoJSONSource;
    }

    const features = camps
      .filter((camp) => {
        const campType = camp.get('typeId') && camp.get('typeId').toString();

        return camp.getIn(['published', lang]) && campTypeFilters.get(campType);
      })
      .reduce((accCamps, camp) => {
        const locations = camp.get('locations')
          .reduce((accLocations, location) => {
            const statistics = location
              .get('statistics')
              .find(stat => stat.get('year') === currentYear);

            if (!statistics) {
              return accLocations;
            }

            const properties = Map({
              campId: camp.get('id'),
              ruName: camp.getIn(['title', 'ru']),
              enName: camp.getIn(['title', 'en']),
              deName: camp.getIn(['title', 'de']),
              typeId: camp.get('typeId'),
              peoples: statistics.get('prisonersCount')
            });

            const feature = Map({
              type: 'Feature',
              geometry: location.get('geometry'),
              properties
            });

            return accLocations.push(feature);
          }, List());

        return accCamps.merge(locations);
      }, List());

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
      .setIn(['layers', ussrLayerId, 'filter'], getUSSRBoundaryFilterByYear())
      .setIn(['layers', citiesLayerId, 'filter'], citiesFilterByYear)
      .setIn(['layers', citiesLayerId, 'layout', 'text-field'], citiesLang);
  }
);
