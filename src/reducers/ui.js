import Immutable from 'immutable';

const initState = Immutable.fromJS({
  currentYear: 1937,
  currentPrison: null,
  isSearchOpen: false,
  isAboutOpen: false,
  isDemoPlay: false,
  isShowAllPrisons: false
});

const CURRENT_YEAR_CHANGED = 'CURRENT_YEAR_CHANGED';
const CURRENT_PRISON_CHANGED = 'CURRENT_PRISON_CHANGED';
const TOGGLE_ALL_PRISONS = 'TOGGLE_ALL_PRISONS';
const TOGGLE_DEMO = 'TOGGLE_DEMO';

export const changeCurrentYear = year => ({ type: CURRENT_YEAR_CHANGED, payload: year });
export const changeCurrentPrison = id => ({ type: CURRENT_PRISON_CHANGED, payload: id });
export const toggleDemo = () => ({ type: TOGGLE_DEMO });
export const toggleAllPrisons = () => ({ type: TOGGLE_ALL_PRISONS });

export default (state = initState, { type, payload }) => {
  switch (type) {
    case CURRENT_YEAR_CHANGED:
      return state.set('currentYear', payload);
    case CURRENT_PRISON_CHANGED:
      return state.set('currentPrison', payload);
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
