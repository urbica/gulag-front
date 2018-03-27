import { push } from 'react-router-redux';
// import { updateIntl } from 'react-intl-redux';
import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux';

import Aside from './Aside';

// action creators
import { toggleCampFilters, toggleMenu } from '../App/reducers/uiReducer';

import en from '../../intl/en';
import ru from '../../intl/ru';

const locales = { en, ru };

const mapStateToProps = state => ({
  isMenuOpen: state.getIn(['ui', 'isMenuOpen']),
  locale: state.getIn(['intl', 'locale'])
});
const mapDispatchToProps = dispatch => ({
  pushToSearch: () => dispatch(push('/search')),
  closeMenu: () => dispatch(toggleMenu()),
  openCampFilters: () => dispatch(toggleCampFilters()),
  pushToChronology: () => dispatch(push('/chronology')),
  pushToAbout: () => dispatch(push('/about')),
  changeLang: lang => dispatch(updateIntl({ locale: lang, messages: locales[lang].messages }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
