export const langSelector = state => state.getIn(['intl', 'locale']);
export const prisonsSelector = state => state.getIn(['data', 'prisons']);
export const mapStyleSelector = state => state.getIn(['data', 'mapStyle']);
export const currentYearSelector = state => state.getIn(['ui', 'currentYear']);
export const viewportSelector = state => state.getIn(['ui', 'viewport']);
export const isShowAllPrisonsSelector = state => state.getIn(['ui', 'isShowAllPrisons']);
