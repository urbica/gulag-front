import transition from 'styled-transition-group';

export default transition.div`
  position: fixed;
  top: 28px;
  left: 23px;

  display: flex;

  &:enter {
    top: -100px;
  }

  &:enter-active {
    top: 28px;
    transition: top 400ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
`;
