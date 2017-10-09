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

// const layersSelector = state => state.getIn(['data', 'mapStyle', 'layers']);
// const sourcesSelector = state => state.getIn(['data', 'mapStyle', 'sources']);

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
      .flatMap(prison => prison.get('features'))
      .filter(
        feature =>
          isShowAllPrisons || feature.get('properties').has(currentYear.toString())
      )
      .map(feature => feature.setIn(['properties', 'peoples'], feature.getIn(['properties', currentYear.toString(), 'peoples'])));

    return emptyGeoJSONSource
      .setIn(['data', 'features'], features);
  }
);

// eslint-disable-next-line import/prefer-default-export
export const finalStyleSelector = createSelector(
  mapStyleSelector,
  prisonSourceSelector,
  currentYearSelector,
  (mapStyle, prisonSource, currentYear) => {
    if (!mapStyle) {
      return null;
    }

    const ussrLayerId = mapStyle
      .get('layers')
      .findIndex(layer => layer.get('id') === 'USSR');

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

    return mapStyle
      .setIn(['sources', 'prisons'], prisonSource)
      .setIn(['layers', ussrLayerId, 'filter'], getUSSRBoundaryFilterByYear())
      .update('layers', previousLayers => previousLayers.concat(layers));
  }
);
