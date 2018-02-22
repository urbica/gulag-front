import React from 'react';
import PropTypes from 'prop-types';
// import { updateIntl } from 'react-intl-redux';
import { connect } from 'react-redux';

// styled
import Container from './Container';
import Button from './Button';

const Aside = ({ isOpen }) => (
  <Container isOpen={isOpen}>
    <div>
      <Button>Поиск</Button>
      <Button>Типы лагерей на карте</Button>
      <Button>Хронология ГУЛАГа</Button>
    </div>
    <div>
      <Button>О проекте</Button>
      <div>
        <button>ru</button>
        <button>en</button>
        <button>de</button>
      </div>
    </div>
  </Container>
);

Aside.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default connect(state => ({ isOpen: state.getIn(['ui', 'isMenuOpen']) }))(Aside);
