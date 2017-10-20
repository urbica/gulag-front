import React from 'react';
import PropTypes from 'prop-types';

// icons
import search from './btn-search.svg';
import info from './btn-info.svg';

import Container from './Container';

const images = {
  search: {
    src: search,
    alt: 'loupe-icon'
  },
  info: {
    src: info,
    alt: 'info-sign'
  }
};

const Button = ({ onClick, type }) => (
  <Container onClick={onClick}>
    <img src={images[type].src} alt={images[type].alt} />
  </Container>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
