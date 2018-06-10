import styled from 'styled-components';

// styled
import ChartButtonTemplate from '../ChartButtonTemplate';

export default styled(ChartButtonTemplate)`
  background-color: rgba(0, 0, 0, ${({ isPlay }) => (isPlay ? 1 : 0.5)});

  & img {
    opacity: 1;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
