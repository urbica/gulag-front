import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
// import { updateIntl } from 'react-intl-redux';
import { connect } from 'react-redux';

// action creators
import { toggleCampFilters, toggleMenu } from '../App/reducers/uiReducer';

// styled
import Container from './Container';
import Button from './Button';

const Aside = (props) => {
  const {
    isMenuOpen, openCampFilters, pushToSearch, closeMenu, pushToChronology, pushToAbout
  } = props;
  return (
    <Container
      mountOnEnter
      isMenuOpen={isMenuOpen}
      in={isMenuOpen}
      timeout={400}
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
