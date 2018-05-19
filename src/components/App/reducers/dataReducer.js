import Immutable from 'immutable';

const initState = Immutable.fromJS({
  camps: null,
  activities: null,
  regions: null,
  types: [],
  periods: null
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
