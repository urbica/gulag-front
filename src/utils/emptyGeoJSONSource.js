import { fromJS } from 'immutable';

export default fromJS({
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  }
});
