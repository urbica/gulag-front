import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import CampFilters from './CampFilters';
import { isCampFiltersOpenSelector, typesSelector } from '../App/selectors';
import {
  toggleCampFilters,
  toggleCampTypeFilters
} from '../App/reducers/uiReducer';

const mapStateToProps = createSelector(
  typesSelector,
  isCampFiltersOpenSelector,
  state => state.getIn(['ui', 'campTypeFilters']),
  state => state.getIn(['intl', 'locale']),
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
