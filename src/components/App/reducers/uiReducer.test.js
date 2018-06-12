import reducer, { initState } from './uiReducer';
import { FETCH_REQUEST, FETCH_SUCCESS } from './dataActions';
import {
  changeCurrentYear,
  toggleAllPrisons,
  toggleCampFilters,
  toggleDemo,
  toggleMenu
} from './uiActions';

describe('Ui Reducer', () => {
  it('returns a state object', () => {
    const newState = reducer(undefined, { type: 'ANYTHING' });

    expect(newState).toBeDefined();
  });
  it('change current year', () => {
    const value = 1937;
    const newState = reducer(initState, changeCurrentYear(value));

    expect(newState.get('currentYear')).toEqual(value);
    expect(newState.get('isShowAllPrisons')).toEqual(false);
  });
  it('toggle demo', () => {
    const newState = reducer(initState, toggleDemo());
    expect(newState.get('isDemoPlay')).toEqual(true);
    expect(newState.get('isShowAllPrisons')).toEqual(false);
  });
  it('can show all prisoners', () => {
    const newState = reducer(initState, toggleAllPrisons());
    expect(newState.get('isDemoPlay')).toEqual(false);
    expect(newState.get('isShowAllPrisons')).toEqual(true);
  });
  it('toggle menu', () => {
    const newState = reducer(initState, toggleMenu());
    expect(newState.get('isMenuOpen')).toEqual(true);
  });
  it('can show that data is loading', () => {
    const newState = reducer(initState, { type: FETCH_REQUEST });
    expect(newState.get('isDataLoading')).toEqual(true);
  });
  it('can show that data is loaded', () => {
    const newState = reducer(initState, { type: FETCH_SUCCESS });
    expect(newState.get('isDataLoading')).toEqual(false);
  });
  it('toggle camp filters', () => {
    const newState = reducer(initState, toggleCampFilters());
    expect(newState.get('isCampFiltersOpen')).toEqual(true);
  });
});
