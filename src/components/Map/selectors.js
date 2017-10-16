import Immutable from 'immutable';
import { createSelector } from 'reselect';

import layers from '../../config/layers';

import {
  langSelector,
  prisonsSelector,
  mapStyleSelector,
  currentYearSelector,
  isShowAllPrisonsSelector
} from '../App/selectors';

const emptyGeoJSONSource = Immutable.fromJS({
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  }
});

const prisonSourceSelector = createSelector(
  prisonsSelector,
  langSelector,
  isShowAllPrisonsSelector,
  currentYearSelector,
  (prisons, lang, isShowAllPrisons, currentYear) => {
    if (!prisons) {
      return emptyGeoJSONSource;
    }

    const features = prisons
      .toList()
      .filter(prison => prison.getIn(['published', lang]))
      .reduce((acc, prison) => (
        prison
          .get('features')
          .reduce((oldFeatures, feature) => {
            if (feature.getIn(['properties', currentYear.toString()]) || isShowAllPrisons) {
              const newProperties = Immutable.Map({
                id: prison.get('id'),
                ruName: prison.getIn(['name', 'ru']),
                enName: prison.getIn(['name', 'en']),
                deName: prison.getIn(['name', 'de']),
                peoples: feature.getIn(['properties', currentYear.toString(), 'peoples'])
              });

              return oldFeatures.push(feature.set('properties', newProperties));
            }
            return oldFeatures;
          }, acc)
      ), Immutable.List());

    return emptyGeoJSONSource
      .setIn(['data', 'features'], features);
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

    const ussrLayerId = mapStyle
      .get('layers')
      .findIndex(layer => layer.get('id') === 'USSR');

    const citiesLayerId = mapStyle
      .get('layers')
      .findIndex(layer => layer.get('id') === 'city all last');

    const getUSSRBoundaryFilterByYear = () => {
      if (currentYear !== 1960) {
        return Immutable.fromJS(
          ['all',
            ['<=', 'year_start', currentYear],
            ['>', 'year_end', currentYear]
          ]
        );
      }

      return Immutable.fromJS(
        ['all',
          ['==', 'year_end', currentYear]
        ]
      );
    };
    const citiesFilterByYear = Immutable.fromJS(
      ['all',
        ['==', 'year', currentYear]
      ]
    );

    const citiesLang = `{historical_name${lang === 'ru' ? 'ru' : '_en'}}`;

    return mapStyle
      .setIn(['sources', 'prisons'], prisonSource)
      .setIn(['layers', ussrLayerId, 'filter'], getUSSRBoundaryFilterByYear())
      .setIn(['layers', citiesLayerId, 'filter'], citiesFilterByYear)
      .setIn(['layers', citiesLayerId, 'layout', 'text-field'], citiesLang)
      .update('layers', previousLayers => previousLayers.concat(layers));
  }
);
