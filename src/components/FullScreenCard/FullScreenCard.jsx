import React from 'react';
import PropTypes from 'prop-types';

import icon from './btn-close.svg';
import Container from './Container';
import Button from './Button';
import ChildrenContainer from './ChildrenContainer';

const FullScreenCard = ({ onClick, children }) => (
  <Container>
    <Button onClick={onClick}>
      <img src={icon} alt='close' />
    </Button>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </Container>
);

FullScreenCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default FullScreenCard;
