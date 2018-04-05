import transition from 'styled-transition-group';

export default transition.div`
  position: absolute;
  left: ${({ isCampFiltersOpen }) => (isCampFiltersOpen ? 0 : '-400px')};

  width: 400px;
  height: 100vh;
  padding: 40px;

  background-color: #14171a;

  overflow: scroll;
  
  &:enter {
    left: -400px;
  }

  &:enter-active {
    left: 0;

    transition: left 250ms ease-in-out;
  }

  &:exit {
    left: 0;
  }

  &:exit-active {
    left: -400px;

    transition: left 250ms ease-in-out;
  }

  @media (max-width: 600px) {
    width: 100%;
    left: ${({ isCampFiltersOpen }) => (isCampFiltersOpen ? 0 : '-100%')};
    padding-left: 10vw;
    padding-right: 10vw;

    &:enter {
      left: -100%;
    }

    &:enter-active {
      left: 0;
    }

    &:exit {
      left: 0;
    }

    &:exit-active {
      left: -100%;
    }
  }
`;
