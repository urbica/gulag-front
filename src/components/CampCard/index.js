import createImmutableSelector from 'create-immutable-selector';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { branch, compose, renderNothing } from 'recompose';

// selectors
import { localeSelector } from '../App/reducers/intlReducer';
import { campSelector, activitiesSelector } from '../App/reducers/dataReducer';
import {
  currentYearSelector,
  campTypeFiltersSelector
} from '../App/reducers/uiReducer';

import {
  toggleCampTypeFilters,
  changeCurrentYear
} from '../App/reducers/uiActions';

import CampCard from './CampCard';
import { changeViewport } from '../Map/mapActions';

const mapStateToProps = createImmutableSelector(
  localeSelector,
  campSelector,
  activitiesSelector,
  currentYearSelector,
  campTypeFiltersSelector,
  (lang, camp, activities, currentYear, campTypeFilters) => ({
    lang,
    camp,
    activities,
    currentYear,
    campTypeFilters
  })
);
const mapDispatchToProps = dispatch => ({
  closeCard: () => dispatch(push('/')),
  changeViewport: newViewport => dispatch(changeViewport(newViewport)),
  changeCurrentYear: newYear => dispatch(changeCurrentYear(newYear)),
  openCard: url => dispatch(push(`/${url}`)),
  toggleCampTypeFilters: id => dispatch(toggleCampTypeFilters(id))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withBranch = branch(({ camp }) => !camp, renderNothing);

const enhance = compose(
  withConnect,
  withBranch
);
export default enhance(CampCard);
