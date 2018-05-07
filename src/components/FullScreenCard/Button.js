import styled, { keyframes } from 'styled-components';
import Button from '../Button';

const animation = keyframes`
  from {
    left: -100vw;
  }
  to {
    left: calc(100vw - 90px);
  }
`;

export default styled(Button)`
  position: fixed;
  top: 40px;
  left: calc(100vw - 90px);

  padding: 0;
  border: none;
  margin: 0;

  outline: none;
  background-color: transparent;

  animation: ${animation} 0.5s ease-in-out;

  z-index: 1;

  @media (max-width: 768px) {
    top: 10px;
    left: calc(100vw - 60px);

    border-radius: 4px;

    background-color: rgba(0, 0, 0, 0.9);
  }
`;
