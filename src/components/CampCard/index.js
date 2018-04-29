import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { branch, compose, renderNothing } from 'recompose';

// selectors
import { langSelector, activitiesSelector } from '../App/selectors';
import { currentYearSelector } from '../App/reducers/uiSelectors';
import prisonSelector from './selector';

import { changeViewport, changeCurrentYear } from '../App/reducers/uiReducer';

import CampCard from './CampCard';

const mapStateToProps = createSelector(
  langSelector,
  prisonSelector,
  activitiesSelector,
  currentYearSelector,
  (lang, camp, activities, currentYear) => {
    if (!activities) {
      return {
        lang,
        camp,
        activities: null,
        currentYear
      };
    }

    return {
      lang,
      camp,
      activities: activities.reduce(
        (acc, ativity) => acc.set(ativity.get('id'), ativity),
        Map()
      ),
      currentYear
    };
  }
);
const mapDispatchToProps = dispatch => ({
  closeCard: () => dispatch(push('/')),
  changeViewport: newViewport => dispatch(changeViewport(newViewport)),
  changeCurrentYear: newYear => dispatch(changeCurrentYear(newYear)),
  openCard: url => dispatch(push(`/${url}`))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withBranch = branch(({ camp }) => !camp, renderNothing);

const enhance = compose(withConnect, withBranch);
export default enhance(CampCard);
