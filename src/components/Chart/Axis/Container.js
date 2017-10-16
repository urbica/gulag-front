import styled from 'styled-components';

import { height, margin } from '../config';

export default styled.g`
  transform: translate(${margin.left}px, ${height + margin.top}px);

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
