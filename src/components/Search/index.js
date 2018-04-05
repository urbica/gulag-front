import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { campsSelector, langSelector } from '../App/selectors';

import Search from './Search';
// import { getPeriods } from '../../utils/utils';

const mapStateToProps = createSelector(
  campsSelector,
  langSelector,
  (camps, lang) => {
    if (!camps) {
      return { camps: Map(), lang };
    }

    const filteredCamps = camps
      .filter(camp => camp.getIn(['published', lang]))
      .toList();

    return { camps: filteredCamps, lang };
  }
);
const mapDispatchToProps = dispatch => ({
  pushToRoot: () => dispatch(push('/')),
  pushToCamp: id => dispatch(push(`/camp${id}`))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
