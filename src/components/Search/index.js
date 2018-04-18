import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { campsSelector, langSelector, regionsSelector } from '../App/selectors';

import Search from './Search';

const mapStateToProps = createSelector(
  campsSelector,
  langSelector,
  regionsSelector,
  (camps, lang, regions) => {
    if (!camps) {
      return { camps: Map(), lang, regions };
    }

    const filteredCamps = camps
      .filter(camp => camp.getIn(['published', lang]))
      .toList();

    return {
      camps: filteredCamps,
      lang,
      regions: regions.reduce(
        (acc, region) => acc.set(region.get('id'), region),
        Map()
      )
    };
  }
);
const mapDispatchToProps = dispatch => ({
  pushToRoot: () => dispatch(push('/')),
  pushToCamp: id => dispatch(push(`/camp${id}`))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
