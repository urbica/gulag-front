import styled from 'styled-components';

import { height, margin } from '../config';

export default styled.g`
  transform: translate(${margin.left}px, ${height + margin.top}px);

  & path,
  & line {
    stroke: #fff;
    stroke-width: 1;
    opacity: 0.4;
  }

  & text {
    fill: #e2f3e3;
    font-size: 12px;
    opacity: 0.5;
  }
`;
