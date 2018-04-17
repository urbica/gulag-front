import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// selectors
import { langSelector, activitiesSelector } from '../App/selectors';
import prisonSelector from './selector';

import CampCard from './CampCard';

const mapStateToProps = createSelector(
  langSelector,
  prisonSelector,
  activitiesSelector,
  (lang, camp, activities) => {
    if (!activities) {
      return {
        lang,
        camp,
        activities: null
      };
    }

    return {
      lang,
      camp,
      activities: activities.reduce(
        (acc, ativity) => acc.set(ativity.get('id'), ativity),
        Map()
      )
    };
  }
);
const mapDispatchToProps = dispatch => ({
  closeCard: () => dispatch(push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampCard);
