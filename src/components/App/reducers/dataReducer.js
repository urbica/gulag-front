import Immutable from 'immutable';

const initState = Immutable.fromJS({
  camps: null,
  periods: null,
  photos: null,
  activities: null,
  places: null,
  types: [],
  mapStyles: null
});

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export default (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS:
      return state.merge(payload);
    default:
      return state;
  }
};
