import { getData } from '../utils';

const initState = {
  prisons: null,
  periods: null,
  photos: null,
  activities: null,
  places: null,
  types: null
};

const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';

const dataLoaded = data => ({ type: DATA_FETCH_SUCCESS, payload: data });

export const fetchData = () => (
  (dispatch) => {
    getData()
      .then(data => dispatch(dataLoaded(data)));
  }
);

export default (state = initState, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
