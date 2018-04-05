import Immutable from 'immutable';
import { FETCH_REQUEST, FETCH_SUCCESS } from './dataReducer';

export const initState = Immutable.fromJS({
  currentYear: 1937,
  viewport: {
    latitude: 60,
    longitude: 90,
    zoom: 2.5
  },
  isDemoPlay: false,
  isShowAllPrisons: false,
  isMenuOpen: false,
  isDataLoading: true,
  isCampFiltersOpen: false,
  campTypeFilters: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true
  }
});

const CURRENT_YEAR_CHANGED = 'CURRENT_YEAR_CHANGED';
const VIEWPORT_CHANGED = 'VIEWPORT_CHANGED';
const TOGGLE_ALL_PRISONS = 'TOGGLE_ALL_PRISONS';
const TOGGLE_DEMO = 'TOGGLE_DEMO';
const MENU_TOGGLED = 'MENU_TOGGLED';
const CAMP_FILTERS_TOGGLED = 'CAMP_FILTERS_TOGGLED';
const CAMP_FILTER_TOGGLED = 'CAMP_FILTER_TOGGLED';

export const changeCurrentYear = year => ({
  type: CURRENT_YEAR_CHANGED,
  payload: year
});
export const changeViewport = newViewport => ({
  type: VIEWPORT_CHANGED,
  payload: newViewport
});
export const toggleDemo = () => ({ type: TOGGLE_DEMO });
export const toggleAllPrisons = () => ({ type: TOGGLE_ALL_PRISONS });
export const toggleMenu = () => ({ type: MENU_TOGGLED });
export const toggleCampFilters = () => ({ type: CAMP_FILTERS_TOGGLED });
export const toggleCampTypeFilters = id => ({
  type: CAMP_FILTER_TOGGLED,
  payload: id
});

export default (state = initState, { type, payload }) => {
  switch (type) {
    case CURRENT_YEAR_CHANGED:
      return state
        .set('currentYear', parseInt(payload, 10))
        .set('isShowAllPrisons', false);
    case VIEWPORT_CHANGED:
      return state.update('viewport', previousViewport =>
        previousViewport.merge(payload));
    case TOGGLE_DEMO:
      return state
        .set('isDemoPlay', !state.get('isDemoPlay'))
        .set('isShowAllPrisons', false);
    case TOGGLE_ALL_PRISONS:
      return state
        .set('isShowAllPrisons', !state.get('isShowAllPrisons'))
        .set('isDemoPlay', false);
    case MENU_TOGGLED:
      return state.set('isMenuOpen', !state.get('isMenuOpen'));
    case FETCH_REQUEST:
      return state.set('isDataLoading', true);
    case FETCH_SUCCESS:
      return state.set('isDataLoading', false);
    case CAMP_FILTERS_TOGGLED:
      return state.set('isCampFiltersOpen', !state.get('isCampFiltersOpen'));
    case CAMP_FILTER_TOGGLED:
      return state.setIn(
        ['campTypeFilters', payload],
        !state.getIn(['campTypeFilters', payload])
      );
    default:
      return state;
  }
};
