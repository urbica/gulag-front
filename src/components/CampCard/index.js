import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { branch, compose, renderNothing } from 'recompose';

// selectors
import { langSelector, activitiesSelector } from '../App/selectors';
import {
  currentYearSelector,
  campTypeFiltersSelector
} from '../App/reducers/uiSelectors';
import campSelector from './selector';

import {
  changeViewport,
  changeCurrentYear,
  toggleCampTypeFilters
} from '../App/reducers/uiReducer';

import CampCard from './CampCard';

const mapStateToProps = createSelector(
  langSelector,
  campSelector,
  activitiesSelector,
  currentYearSelector,
  campTypeFiltersSelector,
  (lang, camp, activities, currentYear, campTypeFilters) => ({
    lang,
    camp,
    activities: !activities
      ? null
      : activities.reduce(
          (acc, ativity) => acc.set(ativity.get('id'), ativity),
          Map()
        ),
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withBranch = branch(({ camp }) => !camp, renderNothing);

const enhance = compose(withConnect, withBranch);
export default enhance(CampCard);
