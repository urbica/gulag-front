import createImmutableSelector from 'create-immutable-selector';
import { push } from 'react-router-redux';
import { updateIntl } from 'react-intl-redux';
import { connect } from 'react-redux';

// selectors
import { isMenuOpenSelector } from '../App/reducers/uiReducer';
import { localeSelector } from '../App/reducers/intlReducer';

// actions
import { toggleMenu, toggleCampFilters } from '../App/reducers/uiActions';

import en from '../../intl/en';
import ru from '../../intl/ru';

import Aside from './Aside';

const locales = { en, ru };

const mapStateToProps = createImmutableSelector(
  isMenuOpenSelector,
  localeSelector,
  (isMenuOpen, locale) => ({ isMenuOpen, locale })
);
const mapDispatchToProps = dispatch => ({
  pushToSearch: () => dispatch(push('/search')),
  closeMenu: () => dispatch(toggleMenu()),
  openCampFilters: () => dispatch(toggleCampFilters()),
  pushToChronology: () => dispatch(push('/chronology')),
  pushToAbout: () => dispatch(push('/about')),
  changeLang: lang =>
    dispatch(updateIntl({ locale: lang, messages: locales[lang].messages }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside);
