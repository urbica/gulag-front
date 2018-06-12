import { fromJS } from 'immutable';
import createImmutableSelector from 'create-immutable-selector';

// actions
import * as dataActions from './dataActions';
import * as uiActions from './uiActions';

// initial state
export const initState = fromJS({
  currentYear: 1937,
  isDemoPlay: false,
  isShowAllPrisons: false,
  isMenuOpen: false,
  isDataLoading: true,
  isCampFiltersOpen: false,
  campTypeFilters: {
    1: true, // ITL
    2: false, // Special camps
    3: false, // NKVD special camps
    4: false, // Camp points
    5: false, // Special settlements
    6: false // Screening and filtration camps
  }
});

// selectors
const uiSelector = createImmutableSelector(state => state.get('ui'), ui => ui);
export const currentYearSelector = createImmutableSelector(uiSelector, ui =>
  ui.get('currentYear'));
export const isDemoPlaySelector = createImmutableSelector(uiSelector, ui =>
  ui.get('isDemoPlay'));
export const isShowAllPrisonsSelector = createImmutableSelector(
  uiSelector,
  ui => ui.get('isShowAllPrisons')
);
export const isMenuOpenSelector = createImmutableSelector(uiSelector, ui =>
  ui.get('isMenuOpen'));
export const isCampFiltersOpenSelector = createImmutableSelector(
  uiSelector,
  ui => ui.get('isCampFiltersOpen')
);
export const campTypeFiltersSelector = createImmutableSelector(uiSelector, ui =>
  ui.get('campTypeFilters'));
export const isDataLoadingSelector = createImmutableSelector(uiSelector, ui =>
  ui.get('isDataLoading'));

// reducer
export default (state = initState, { type, payload }) => {
  switch (type) {
    case dataActions.FETCH_REQUEST:
      return state.set('isDataLoading', true);
    case dataActions.FETCH_SUCCESS:
      return state.set('isDataLoading', false);
    case uiActions.CURRENT_YEAR_CHANGED:
      return state
        .set('currentYear', parseInt(payload, 10))
        .set('isShowAllPrisons', false)
        .set('isMenuOpen', false)
        .set('isCampFiltersOpen', false);
    case uiActions.TOGGLE_DEMO:
      return state
        .set('isDemoPlay', !state.get('isDemoPlay'))
        .set('isShowAllPrisons', false);
    case uiActions.TOGGLE_ALL_PRISONS:
      return state
        .set('isShowAllPrisons', !state.get('isShowAllPrisons'))
        .set('isDemoPlay', false)
        .set('isMenuOpen', false)
        .set('isCampFiltersOpen', false);
    case uiActions.MENU_TOGGLED:
      return state.set('isMenuOpen', !state.get('isMenuOpen'));
    case uiActions.CAMP_FILTERS_TOGGLED:
      return state.set('isCampFiltersOpen', !state.get('isCampFiltersOpen'));
    case uiActions.CAMP_FILTER_TOGGLED:
      return state.setIn(
        ['campTypeFilters', payload],
        !state.getIn(['campTypeFilters', payload])
      );
    case uiActions.CLOSE_MENUS:
      return state.set('isMenuOpen', false).set('isCampFiltersOpen', false);
    default:
      return state;
  }
};
