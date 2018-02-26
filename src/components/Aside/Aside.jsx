import React from 'react';
import PropTypes from 'prop-types';

// styled
import Container from './Container';
import Button from './Button';

const Aside = (props) => {
  const {
    isMenuOpen, openCampFilters, pushToSearch, closeMenu, pushToChronology, pushToAbout
  } = props;

  return (
    <Container
      isMenuOpen={isMenuOpen}
      in={isMenuOpen}
    >
      <div>
        <div>
          <Button onClick={pushToSearch}>Поиск</Button>
          <button onClick={closeMenu}>close</button>
        </div>
        <Button onClick={openCampFilters}>Типы лагерей на карте</Button>
        <Button onClick={pushToChronology}>Хронология ГУЛАГа</Button>
      </div>
      <div>
        <Button onClick={pushToAbout}>О проекте</Button>
        <div>
          <button>ru</button>
          <button>en</button>
          <button>de</button>
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
