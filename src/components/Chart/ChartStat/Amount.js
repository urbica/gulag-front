import styled from 'styled-components';

import { mainFontColour } from '../../../config/styles';

export default styled.div`
  font-size: 20px;
  font-weight: 900;

  opacity: 0.8;

  &:before {
    content: '';

    display: block;
    width: 25px;
    height: 2px;
    margin-bottom: 5px;

    background-color: ${({ color }) =>
      color === 'white' ? mainFontColour : '#ae2817'};
  }
`;
