import transition from 'styled-transition-group';

export default transition.div.attrs({
  timeout: 400
})`
  position: absolute;
  left: ${({ isMenuOpen }) => (isMenuOpen ? 0 : '-400px')};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;
  height: 100%;
  padding: 50px 40px;

  background-color: #14171a;
  
  &:enter {
    left: -400px;
  }

  &:enter-active {
    left: 0;

    transition: left 400ms ease-in;
  }

  &:exit {
    left: 0;
  }

  &:exit-active {
    left: -400px;

    transition: left 400ms ease-in;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    left: ${({ isMenuOpen }) => (isMenuOpen ? 0 : '-100%')};
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
