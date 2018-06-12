export const CURRENT_YEAR_CHANGED = '@@ui/CURRENT_YEAR_CHANGED';
export const changeCurrentYear = year => ({
  type: CURRENT_YEAR_CHANGED,
  payload: year
});

export const TOGGLE_ALL_PRISONS = '@@ui/TOGGLE_ALL_PRISONS';
export const toggleAllPrisons = () => ({ type: TOGGLE_ALL_PRISONS });

export const TOGGLE_DEMO = '@@ui/TOGGLE_DEMO';
export const toggleDemo = () => ({ type: TOGGLE_DEMO });

export const MENU_TOGGLED = '@@ui/MENU_TOGGLED';
export const toggleMenu = () => ({ type: MENU_TOGGLED });

export const CAMP_FILTERS_TOGGLED = '@@ui/CAMP_FILTERS_TOGGLED';
export const toggleCampFilters = () => ({ type: CAMP_FILTERS_TOGGLED });

export const CAMP_FILTER_TOGGLED = '@@ui/CAMP_FILTER_TOGGLED';
export const toggleCampTypeFilters = id => ({
  type: CAMP_FILTER_TOGGLED,
  payload: id
});

export const CLOSE_MENUS = '@@ui/CLOSE_MENUS';
export const closeMenus = () => ({ type: CLOSE_MENUS });
