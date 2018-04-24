import styled from 'styled-components';

import { height, margin } from '../config';
import { mainFontColour } from '../../../config/styles';

export default styled.g`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  transform: translate(${margin.left}px, ${height + margin.top}px);

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
    display: ${({ isChartVisible }) => (isChartVisible ? 'inferit' : 'none')};

    @media (max-width: 1023px) {
      display: none;
    }
  }

  .currentYear {
    fill: ${mainFontColour};
  }

  .textShadow {
    @media (max-width: 1023px) {
      display: none;
    }
  }
`;
