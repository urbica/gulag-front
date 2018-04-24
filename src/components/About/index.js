import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import About from './About';

const mapStateToProps = createSelector(
  state => state.getIn(['intl', 'locale']),
  locale => ({ locale })
);
const mapDispatchToProps = dispatch => ({
  pushToRoot: () => dispatch(push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
