import { createSelector } from 'reselect';
import { List } from 'immutable';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { periodsSelector, langSelector } from '../App/selectors';

import Chronology from './Chronology';

const mapStateToProps = createSelector(
  periodsSelector,
  langSelector,
  (periods, lang) => {
    if (!periods) {
      return { periods: List(), lang };
    }
    return {
      periods: periods.sort((a, b) => a.get('id') > b.get('id')),
      lang
    };
  }
);
const mapDispatchToProps = dispatch => ({
  pushToRoot: () => dispatch(push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chronology);
