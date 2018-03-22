import { createSelector } from 'reselect';
import { List } from 'immutable';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { periodsSelector } from '../App/selectors';

import Chronology from './Chronology';

const mapStateToProps = createSelector(periodsSelector, (periods) => {
  if (!periods) {
    return { periods: List() };
  }
  return { periods: periods.sort((a, b) => a.get('id') > b.get('id')) };
});
const mapDispatchToProps = dispatch => ({
  pushToRoot: () => dispatch(push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chronology);
