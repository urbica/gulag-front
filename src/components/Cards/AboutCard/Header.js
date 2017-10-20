import styled from 'styled-components';
import { cardBackgroundColor } from '../../../config/styles';

export default styled.header`
  display: flex;
  flex-shrink: 0;
  padding: 40px 0 14px 40px;

  background-color: ${cardBackgroundColor};

  @media (max-width: 425px) {
    padding: 20px 0 0 20px;
  }
`;
