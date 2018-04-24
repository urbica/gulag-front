import styled from 'styled-components';
import { margin } from '../config';

import { mainFontColour } from '../../../../config/styles';

export default styled.g`
  transform: translate(${margin.left}px, ${margin.top}px);

  & path,
  & line {
    stroke: #fff;
    stroke-width: 1;
    opacity: 0.25;
  }

  & text {
    font-family: 'Formular';
    font-size: 12px;
    fill: ${mainFontColour};
    fill-opacity: 0.5;
    transform: translateX(-10px);
  }
`;
