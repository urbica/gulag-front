import styled from 'styled-components';

import ChartButtonTemplate from '../../ChartButtonTemplate';

export default styled(ChartButtonTemplate)`
  position: relative;

  font-size: 12px;
  color: rgba(255, 255, 255, ${({ isShowAll }) => (isShowAll ? 1 : 0.6)});

  background-color: rgba(0, 0, 0, ${({ isShowAll }) => (isShowAll ? 1 : 0.5)});

  @media (max-width: 1023px) {
    display: none;
  }
`;
