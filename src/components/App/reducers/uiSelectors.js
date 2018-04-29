export const currentYearSelector = state => state.getIn(['ui', 'currentYear']);
export const viewportSelector = state => state.getIn(['ui', 'viewport']);
export const isShowAllPrisonsSelector = state =>
  state.getIn(['ui', 'isShowAllPrisons']);
export const isCampFiltersOpenSelector = state =>
  state.getIn(['ui', 'isCampFiltersOpen']);
export const campTypeFiltersSelector = state =>
  state.getIn(['ui', 'campTypeFilters']);
export const isDataLoadingSelector = state =>
  state.getIn(['ui', 'isDataLoading']);
