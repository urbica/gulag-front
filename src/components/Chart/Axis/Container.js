import styled from 'styled-components';

export default styled.g`
  & path,
  & line {
    stroke: #fff;
    stroke-width: 1;
    opacity: 0.25;
  }
  
  & line {
    @media (max-width: 1023px) {
      display: none;
    }
  }
`;
