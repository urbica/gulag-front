import Immutable from 'immutable';
import { createSelector } from 'reselect';

import layers from '../../config/layers';

export const prisonsSelector = state => state.getIn(['data', 'prisons']);
export const mapStyleSelector = state => state.getIn(['data', 'mapStyle']);
export const currentYearSelector = state => state.getIn(['ui', 'currentYear']);
export const currentPrisonSelector = state => state.getIn(['ui', 'currentPrison']);
export const isShowAllPrisonsSelector = state => state.getIn(['ui', 'isShowAllPrisons']);

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
  (prisons) => {
    if (!prisons) {
      return emptyGeoJSONSource;
    }

    const features = prisons.toList().flatMap(prison => prison.get('features'));
    const newSource = emptyGeoJSONSource.setIn(['data', 'features'], features);

    return newSource;
  }
);

export const finalStyleSelector = createSelector(
  mapStyleSelector,
  prisonSourceSelector,
  (mapStyle, prisonSource) => {
    if (!mapStyle) {
      return null;
    }

    return mapStyle.setIn(['sources', 'prisons'], prisonSource)
      .update('layers', previousLayers => previousLayers.concat(layers));
  }
);
