import styled from 'styled-components';

import { margin } from '../config';
import { mainFontColour } from '../../../config/styles';

export default styled.div`
  position: absolute;
  top: 25px;
  left: ${margin.left}px;

  color: ${mainFontColour};

  @media (max-width: 1023px) {
    display: none;
  }
`;
