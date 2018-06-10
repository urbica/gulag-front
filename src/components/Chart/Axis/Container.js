import styled from 'styled-components';

import { height, margin } from '../config';

const { left, top } = margin;

export default styled.g`
  transform: translate(${left}px, ${height + top}px);

  & path,
  & line {
    stroke: #fff;
    stroke-width: 1;
    opacity: 0.4;
  }

  & text {
    fill: #e2f3e3;

    font-size: 12px;
    font-family: Formular;

    opacity: 0.5;
  }
`;
