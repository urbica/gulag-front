import Immutable, { Map } from 'immutable';
import reducer, {
  changeCurrentYear,
  changeViewport,
  toggleDemo,
  toggleAllPrisons,
  toggleMenu,
  toggleCampFilters
} from './uiReducer';
import { FETCH_REQUEST, FETCH_SUCCESS } from './dataReducer';

let initState = Immutable.fromJS({
  currentYear: null,
  viewport: {
    latitude: null,
    longitude: null,
    zoom: null
  },
  isDemoPlay: null,
  isShowAllPrisons: null,
  isMenuOpen: null,
  isDataLoading: null,
  isCampFiltersOpen: null
});

describe('Ui Reducer', () => {
  it('returns a state object', () => {
    initState = reducer(undefined, { type: 'ANYTHING' });

    expect(initState).toBeDefined();
  });
  it('change current year', () => {
    const value = 1937;
    const expectedState = initState
      .set('currentYear', value)
      .set('isShowAllPrisons', false);

    initState = reducer(initState, changeCurrentYear(value));
    expect(initState).toEqual(expectedState);
  });
  it('change viewport', () => {
    const expectedState = initState.set('viewport', Map({
      latitude: 70,
      longitude: 50,
      zoom: 3
    }));

    initState = reducer(initState, changeViewport({
      latitude: 70,
      longitude: 50,
      zoom: 3
    }));
    expect(initState).toEqual(expectedState);
  });
  it('toggle demo', () => {
    const expectedState = initState
      .set('isDemoPlay', true)
      .set('isShowAllPrisons', false);

    initState = reducer(initState, toggleDemo());
    expect(initState).toEqual(expectedState);
  });
  it('can show all prisoners', () => {
    const expectedState = initState
      .set('isDemoPlay', false)
      .set('isShowAllPrisons', true);

    initState = reducer(initState, toggleAllPrisons());
    expect(initState).toEqual(expectedState);
  });
  it('toggle menu', () => {
    const expectedState = initState.set('isMenuOpen', true);

    initState = reducer(initState, toggleMenu());
    expect(initState).toEqual(expectedState);
  });
  it('can show that data is loading', () => {
    const expectedState = initState.set('isDataLoading', true);

    initState = reducer(initState, { type: FETCH_REQUEST });
    expect(initState).toEqual(expectedState);
  });
  it('can show that data is loaded', () => {
    const expectedState = initState.set('isDataLoading', false);

    initState = reducer(initState, { type: FETCH_SUCCESS });
    expect(initState).toEqual(expectedState);
  });
  it('toggle camp filters', () => {
    const expectedState = initState.set('isCampFiltersOpen', true);

    initState = reducer(initState, toggleCampFilters());
    expect(initState).toEqual(expectedState);
  });
});
