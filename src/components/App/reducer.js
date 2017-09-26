const initState = {
  prisons: null,
  periods: null,
  photos: null,
  activities: null,
  places: null,
  types: null
};

export const DATA_FETCH_REQUEST = 'DATA_FETCH_REQUEST';
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';

export const fetchData = url => ({ type: DATA_FETCH_REQUEST, payload: url });

export default (state = initState, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
