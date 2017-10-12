import styled from 'styled-components';

export default styled.g`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  &:hover {
    cursor: pointer;
  }
  
  .circle {
    @media (min-width: 1024px) {
      display: none;
    }
  }
  
  .rect {
    @media (max-width: 1023px) {
      display: none;
    }
  }
  
  .handleLines {
    @media (max-width: 1023px) {
      display: none;
    }
  }
  
  .handleShadow {
    @media (max-width: 1023px) {
      display: none;
    }
  }

  .currentYearRect {
    @media (max-width: 1023px) {
      display: none;
    }
  }

  .currentYear {
    fill: #fff;
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;
