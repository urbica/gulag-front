import React from 'react';
import PropTypes from 'prop-types';
import { t } from '../../intl/helper';

// ico
import cross from '../cross.svg';

// styled
import Container from './Container';
import CloseButton from './CloseButton';
import Button from './Button';
import LangButton from './LangButton';

const Aside = props => {
  const {
    isMenuOpen,
    openCampFilters,
    pushToSearch,
    closeMenu,
    pushToChronology,
    pushToAbout,
    locale,
    changeLang
  } = props;

  return (
    <Container isMenuOpen={isMenuOpen} in={isMenuOpen}>
      <CloseButton onClick={closeMenu}>
        <img src={cross} alt='close' />
      </CloseButton>
      <div>
        <Button onClick={pushToSearch}>{t('aside.search')}</Button>
        <Button onClick={openCampFilters}>{t('aside.campTypes')}</Button>
        <Button onClick={pushToChronology}>{t('aside.gulagChronology')}</Button>
      </div>
      <div>
        <Button onClick={pushToAbout}>{t('aboutCard.heading')}</Button>
        <div>
          <LangButton
            isActive={locale === 'ru'}
            onClick={changeLang.bind(null, 'ru')}
          >
            Rus
          </LangButton>
          <LangButton
            isActive={locale === 'en'}
            onClick={changeLang.bind(null, 'en')}
          >
            Eng
          </LangButton>
          {/* <LangButton
            isActive={locale === 'de'}
            onClick={changeLang.bind(null, 'en')}
          >
            Deu
          </LangButton> */}
        </div>
      </div>
    </Container>
  );
};

Aside.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  pushToSearch: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  openCampFilters: PropTypes.func.isRequired,
  pushToChronology: PropTypes.func.isRequired,
  pushToAbout: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  changeLang: PropTypes.func.isRequired
};

export default Aside;
