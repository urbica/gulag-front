import Immutable from 'immutable';

const initState = Immutable.fromJS({
  currentYear: 1937,
  isSearchOpen: false,
  isAboutOpen: false,
  isDemoPlay: false,
  isShowAllPrisons: false
});

const CURRENT_YEAR_CHANGED = 'CURRENT_YEAR_CHANGED';
const TOGGLE_ALL_PRISONS = 'TOGGLE_ALL_PRISONS';
const TOGGLE_DEMO = 'TOGGLE_DEMO';

export const changeCurrentYear = year => ({ type: CURRENT_YEAR_CHANGED, payload: year });
export const toggleDemo = () => ({ type: TOGGLE_DEMO });
export const toggleAllPrisons = () => ({ type: TOGGLE_ALL_PRISONS });

export default (state = initState, { type, payload }) => {
  switch (type) {
    case CURRENT_YEAR_CHANGED:
      return state.set('currentYear', parseInt(payload, 10));
    case TOGGLE_DEMO:
      return state
        .set('isDemoPlay', !state.get('isDemoPlay'))
        .set('isShowAllPrisons', false);
    case TOGGLE_ALL_PRISONS:
      return state
        .set('isShowAllPrisons', !state.get('isShowAllPrisons'))
        .set('isDemoPlay', false);
    default:
      return state;
  }
};
