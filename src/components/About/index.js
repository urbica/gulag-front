import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { setPropTypes, compose } from 'recompose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// selector
import { langSelector } from '../App/selectors';

// action
import { closeMenus } from '../App/reducers/uiReducer';

// component
import About from './About';

// with connect
const mapStateToProps = createSelector(langSelector, locale => ({ locale }));
const mapDispatchToProps = dispatch => ({
  pushToRoot: () => {
    dispatch(closeMenus());
    dispatch(push('/'));
  }
});

const withPropTypes = setPropTypes({
  locale: PropTypes.PropTypes.oneOf(['ru', 'en', 'de']).isRequired,
  pushToRoot: PropTypes.func.isRequired
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const enhance = compose(
  withConnect,
  withPropTypes
);

export default enhance(About);
