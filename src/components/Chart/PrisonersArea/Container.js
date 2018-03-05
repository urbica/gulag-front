import styled from 'styled-components';

import { margin } from '../config';
import { mainFontColour } from '../../../config/styles';

export default styled.g`
  transform: translate(${margin.left}px, ${margin.top}px);
  pointer-events: auto;

  & g:first-child {
    & rect {
      fill: #eb4200;
      opacity: .1;
      transition: opacity 2s;
      &:hover {
        cursor: pointer;
        opacity: .2;
        transition: opacity .2s;
      }
    }
    & line {
      stroke: #ff2b00;
      stroke-width: 2px;
    }
  }

  & g:nth-child(2) {
    & rect {
      cursor: pointer;
      fill-opacity: 0.1;
    }
  }

  & g:last-child {
    & rect {
      fill: ${mainFontColour};
      opacity: ${({ showAllYears }) => (showAllYears ? 0.6 : 0.1)};
      transition: opacity 2s;
      &:hover {
        cursor: pointer;
        opacity: .2;
        transition: opacity .2s;
      }
    }
    & line {
      stroke: ${mainFontColour};
      stroke-width: 2px;
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
