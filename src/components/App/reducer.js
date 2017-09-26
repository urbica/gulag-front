const initState = {
  prisons: null,
  periods: null,
  photos: null,
  activities: null,
  places: null,
  types: null,
  mapStyle: null
};

export const DATA_FETCH_REQUEST = 'DATA_FETCH_REQUEST';
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';

export const MAP_STYLE_FETCH_REQUEST = 'MAP_STYLE_FETCH_REQUEST';
export const MAP_STYLE_FETCH_SUCCESS = 'MAP_STYLE_FETCH_SUCCESS';
export const MAP_STYLE_FETCH_FAILURE = 'MAP_STYLE_FETCH_FAILURE';

export default (state = initState, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return { ...state, ...action.payload };
    case MAP_STYLE_FETCH_SUCCESS:
      return { ...state, mapStyle: action.payload };
    default:
      return state;
  }
};
