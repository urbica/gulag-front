import createImmutableSelector from 'create-immutable-selector';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// selectors
import {
  publishedCampsSelector,
  regionsSelector
} from '../App/reducers/dataReducer';
import { localeSelector } from '../App/reducers/intlReducer';

// action
import { closeMenus } from '../App/reducers/uiActions';

import Search from './Search';

const mapStateToProps = createImmutableSelector(
  publishedCampsSelector,
  localeSelector,
  regionsSelector,
  (camps, lang, regions) => ({ camps, lang, regions })
);
const mapDispatchToProps = dispatch => ({
  closeCard: () => {
    dispatch(closeMenus());
    dispatch(push('/'));
  },
  openCampCard: id => {
    dispatch(closeMenus());
    dispatch(push(`/camp${id}`));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
