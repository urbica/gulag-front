import { getData } from '../utils';

const initState = {
  prisons: null,
  periods: null,
  photos: null,
  activities: null,
  places: null,
  types: null
};

const LOAD_DATA = 'LOAD_DATA';

export const loadData = data => ({ type: LOAD_DATA, payload: data });

export const fetchData = () => (
  (dispatch) => {
    getData()
      .then(data => dispatch(loadData(data)));
  }
);

export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
