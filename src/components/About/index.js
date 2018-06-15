import createImmutableSelector from 'create-immutable-selector';
import { push } from 'react-router-redux';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// selector
import { localeSelector } from '../App/reducers/intlReducer';

// action
import { closeMenus } from '../App/reducers/uiActions';

// component
import About from './About';

// with connect
const mapStateToProps = createImmutableSelector(localeSelector, locale => ({
  locale
}));
const mapDispatchToProps = dispatch => ({
  closeCard: () => {
    dispatch(closeMenus());
    dispatch(push('/'));
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const enhance = compose(withConnect);

export default enhance(About);
