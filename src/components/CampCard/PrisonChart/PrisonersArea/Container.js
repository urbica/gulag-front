import styled from 'styled-components';

import { margin } from '../config';

export default styled.g`
  transform: translate(${margin.left}px, ${margin.top}px);

  & rect {
    fill: #504f4f;
  }

  & line {
    stroke-width: 2px;
  }

  & text {
    fill: #e2f3e3;
    opacity: 0.8;
  }

  & g text {
    opacity: 0.2;
    fill: #e2f3e3;
    color: #e2f3e3;
  }
`;
