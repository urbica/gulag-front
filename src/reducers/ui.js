import Immutable from 'immutable';
import { viewport } from '../config/map';

const initState = Immutable.fromJS({
  currentYear: 1937,
  viewport,
  isSearchOpen: false,
  isAboutOpen: false,
  isDemoPlay: false,
  isShowAllPrisons: false
});

const CURRENT_YEAR_CHANGED = 'CURRENT_YEAR_CHANGED';
const VIEWPORT_CHANGED = 'VIEWPORT_CHANGED';
const TOGGLE_ALL_PRISONS = 'TOGGLE_ALL_PRISONS';
const TOGGLE_DEMO = 'TOGGLE_DEMO';

export const changeCurrentYear = year => ({ type: CURRENT_YEAR_CHANGED, payload: year });
export const changeViewport = newViewport => ({ type: VIEWPORT_CHANGED, payload: newViewport });
export const toggleDemo = () => ({ type: TOGGLE_DEMO });
export const toggleAllPrisons = () => ({ type: TOGGLE_ALL_PRISONS });

export default (state = initState, { type, payload }) => {
  switch (type) {
    case CURRENT_YEAR_CHANGED:
      return state.set('currentYear', parseInt(payload, 10));
    case VIEWPORT_CHANGED:
      return state.update('viewport', previousViewport => previousViewport.merge(payload));
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
