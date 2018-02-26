import { push } from 'react-router-redux';
// import { updateIntl } from 'react-intl-redux';
import { connect } from 'react-redux';

import Aside from './Aside';

// action creators
import { toggleCampFilters, toggleMenu } from '../App/reducers/uiReducer';

const mapStateToProps = state => ({
  isMenuOpen: state.getIn(['ui', 'isMenuOpen'])
});
const mapDispatchToProps = dispatch => ({
  pushToSearch: () => dispatch(push('/search')),
  closeMenu: () => dispatch(toggleMenu()),
  openCampFilters: () => dispatch(toggleCampFilters()),
  pushToChronology: () => dispatch(push('/chronology')),
  pushToAbout: () => dispatch(push('/about'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
