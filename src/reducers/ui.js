const initState = {
  currentYear: 1937,
  currentPrison: null,
  currentPeriod: null,
  isSearchOpen: false,
  isAboutOpen: false,
  isDemoPlay: false,
  isShowAllPrisons: false
};

export default (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
