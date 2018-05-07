import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    left: -100vw;
  }
  to {
    left: 0;
  }
`;

export default styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: -100vw;

  width: 100%;

  background-color: #14171a;

  overflow: scroll;

  animation: ${animation} 0.5s ease-in-out;
  animation-fill-mode: forwards;
`;
