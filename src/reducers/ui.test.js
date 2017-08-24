import reducer, { changeCurrentYear } from './ui';

describe('Ui Reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' });

    expect(result).toBeDefined();
  });

  it('change current year', () => {
    const startState = {
      currentYear: null,
      currentPrison: null,
      currentPeriod: null,
      isSearchOpen: false,
      isAboutOpen: false,
      isDemoPlay: false,
      isShowAllPrisons: false
    };
    const expectedState = {
      currentYear: 1937,
      currentPrison: null,
      currentPeriod: null,
      isSearchOpen: false,
      isAboutOpen: false,
      isDemoPlay: false,
      isShowAllPrisons: false
    };

    const result = reducer(startState, changeCurrentYear(1937));
    expect(result).toEqual(expectedState);
  });
});
