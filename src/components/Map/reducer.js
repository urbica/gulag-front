import Immutable from 'immutable';

const initState = Immutable.fromJS({
  mapStyle: null
});

export const MAP_STYLE_FETCH_REQUEST = 'MAP_STYLE_FETCH_REQUEST';
export const MAP_STYLE_FETCH_SUCCESS = 'MAP_STYLE_FETCH_SUCCESS';
export const MAP_STYLE_FETCH_FAILURE = 'MAP_STYLE_FETCH_FAILURE';

export default (state = initState, action) => {
  switch (action.type) {
    case MAP_STYLE_FETCH_SUCCESS:
      return state.set('mapStyle', Immutable.fromJS(action.payload));
    default:
      return state;
  }
};
