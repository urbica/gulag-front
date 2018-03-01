import React from 'react';
import PropTypes from 'prop-types';

// ico
import cross from '../cross.svg';

// styled
import Container from './Container';
import CloseButton from './CloseButton';
import Button from './Button';
import LangButton from './LangButton';

const Aside = (props) => {
  const {
    isMenuOpen, openCampFilters, pushToSearch, closeMenu, pushToChronology, pushToAbout
  } = props;

  return (
    <Container
      isMenuOpen={isMenuOpen}
      in={isMenuOpen}
    >
      <CloseButton onClick={closeMenu}>
        <img src={cross} alt='close' />
      </CloseButton>
      <div>
        <Button onClick={pushToSearch}>Поиск</Button>
        <Button onClick={openCampFilters}>Типы лагерей на карте</Button>
        <Button onClick={pushToChronology}>Хронология ГУЛАГа</Button>
      </div>
      <div>
        <Button onClick={pushToAbout}>О проекте</Button>
        <div>
          <LangButton isActive>Rus</LangButton>
          <LangButton>Eng</LangButton>
          <LangButton>Deu</LangButton>
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
  pushToAbout: PropTypes.func.isRequired
};

export default Aside;
