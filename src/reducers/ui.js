const initState = {
  currentYear: 1937,
  currentPrison: null,
  currentPeriod: null,
  isSearchOpen: false,
  isAboutOpen: false,
  isDemoPlay: false,
  isShowAllPrisons: false
};

const CURRENT_YEAR_CHANGED = 'CURRENT_YEAR_CHANGED';
const CURRENT_PRISON_CHANGED = 'CURRENT_PRISON_CHANGED';
const CURRENT_PERIOD_CHANGED = 'CURRENT_PERIOD_CHANGED';
const TOGGLE_ALL_PRISONS = 'TOGGLE_ALL_PRISONS';
const TOGGLE_DEMO = 'TOGGLE_DEMO';

export const changeCurrentYear = year => ({ type: CURRENT_YEAR_CHANGED, payload: year });
export const changeCurrentPrison = id => ({ type: CURRENT_PRISON_CHANGED, payload: id });
export const changeCurrentPeriod = id => ({ type: CURRENT_PERIOD_CHANGED, payload: id });
export const toggleDemo = () => ({ type: TOGGLE_DEMO });
export const toggleAllPrisons = () => ({ type: TOGGLE_ALL_PRISONS });

export default (state = initState, { type, payload }) => {
  switch (type) {
    case CURRENT_YEAR_CHANGED:
      return { ...state, currentYear: payload };
    case CURRENT_PRISON_CHANGED:
      return { ...state, currentPrison: payload };
    case CURRENT_PERIOD_CHANGED:
      return { ...state, currentPeriod: payload };
    case TOGGLE_DEMO:
      return { ...state, isDemoPlay: !state.isDemoPlay, isShowAllPrisons: false };
    case TOGGLE_ALL_PRISONS:
      return { ...state, isShowAllPrisons: !state.isShowAllPrisons, isDemoPlay: false };
    default:
      return state;
  }
};
