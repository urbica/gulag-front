import transition from 'styled-transition-group';

export default transition.div`
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 200px;

  pointer-events: none;

  &:enter {
    bottom: -400px;
  }

  &:enter-active {
    bottom: 0;
    transition: bottom 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  &:exit {
    bottom: 0;
  }

  &:exit-active {
    bottom: -400px;

    transition: bottom 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
`;
