import transition from 'styled-transition-group';

export default transition.div`
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  pointer-events: none;
  
  &:enter {
    bottom: -200px;
  }

  &:enter-active {
    bottom: 0;
    transition: bottom 2000ms ease-in;
  }
`;
