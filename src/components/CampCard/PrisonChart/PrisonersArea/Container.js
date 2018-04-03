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
    fill: #fff;
  }

  & g text {
    opacity: 0.2;
    transform: translate(10px, 18px);
  }
`;
