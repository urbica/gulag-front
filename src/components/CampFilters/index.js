import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import CampFilters from './CampFilters';
import { isCampFiltersOpenSelector, typesSelector } from '../App/selectors';
import { toggleCampFilters, toggleCampTypeFilters } from '../App/reducers/uiReducer';

const mapStateToProps = createSelector(
  typesSelector,
  isCampFiltersOpenSelector,
  state => state.getIn(['ui', 'campTypeFilters']),
  (types, isCampFiltersOpen, campTypeFilters) => ({
    types,
    isCampFiltersOpen,
    campTypeFilters
  })
);
const mapDispatchToProps = dispatch => ({
  closeCampFilters: () => dispatch(toggleCampFilters()),
  toggleFilter: id => dispatch(toggleCampTypeFilters(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampFilters);
