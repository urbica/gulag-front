import transition from 'styled-transition-group';

export default transition.div`
  position: absolute;
  top: 28px;
  left: 23px;

  display: flex;

  &:enter {
    top: -100px;
  }

  &:enter-active {
    top: 28px;
    transition: top 2000ms ease-in;
  }
`;
