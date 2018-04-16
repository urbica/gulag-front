import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// selectors
import { langSelector } from '../App/selectors';
import prisonSelector from './selector';

import CampCard from './CampCard';

const mapStateToProps = createSelector(
  langSelector,
  prisonSelector,
  (lang, camp) => ({
    lang,
    camp
  })
);
const mapDispatchToProps = dispatch => ({
  closeCard: () => dispatch(push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampCard);
