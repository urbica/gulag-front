import transition from 'styled-transition-group';

export default transition.div`
  position: fixed;
  
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  background-color: #2C3542;

  z-index: 1;

  &:exit {
    opacity: 1;
  }

  &:exit-active {
    opacity: 0;
    transition: opacity ${({ timeout }) => timeout}ms ease-in;
  }
`;
