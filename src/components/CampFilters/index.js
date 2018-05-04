import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// selectors
import { typesSelector, langSelector } from '../App/selectors';
import {
  isCampFiltersOpenSelector,
  campTypeFiltersSelector
} from '../App/reducers/uiSelectors';

// actions
import {
  toggleCampFilters,
  toggleCampTypeFilters
} from '../App/reducers/uiReducer';

import CampFilters from './CampFilters';

const mapStateToProps = createSelector(
  typesSelector,
  isCampFiltersOpenSelector,
  campTypeFiltersSelector,
  langSelector,
  (types, isCampFiltersOpen, campTypeFilters, locale) => ({
    types,
    isCampFiltersOpen,
    campTypeFilters,
    locale
  })
);
const mapDispatchToProps = dispatch => ({
  closeCampFilters: () => dispatch(toggleCampFilters()),
  toggleFilter: id => dispatch(toggleCampTypeFilters(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampFilters);
