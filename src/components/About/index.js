import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { langSelector } from '../App/selectors';

import { closeMenus } from '../App/reducers/uiReducer';

import About from './About';

const mapStateToProps = createSelector(langSelector, locale => ({ locale }));
const mapDispatchToProps = dispatch => ({
  pushToRoot: () => { 
    dispatch(closeMenus());
    dispatch(push('/'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
