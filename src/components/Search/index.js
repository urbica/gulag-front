import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// selectors
import {
  filteredCampsSelector,
  langSelector,
  regionsSelector
} from '../App/selectors';

// action
import { closeMenus } from '../App/reducers/uiReducer';

import Search from './Search';

const mapStateToProps = createSelector(
  filteredCampsSelector,
  langSelector,
  regionsSelector,
  (camps, lang, regions) => {
    if (!regions) return { camps, lang };

    return {
      camps,
      lang,
      regions: regions.reduce(
        (acc, region) => acc.set(region.get('id'), region),
        Map()
      )
    };
  }
);
const mapDispatchToProps = dispatch => ({
  closeCard: () => dispatch(push('/')),
  openCampCard: id => {
    dispatch(closeMenus());
    dispatch(push(`/camp${id}`));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
