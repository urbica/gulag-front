import styled from 'styled-components';
import { cardBackgroundColor } from '../../../config/styles';

export default styled.div`
  padding: 15px 30px 20px;
  border-bottom: 1px solid rgba(46,55,67,.3);

  background-color: ${cardBackgroundColor};

  &:hover {
    background-color: #090b0c;
  }

  &:first-child {
    border-top: 1px solid rgba(46,55,67,.3);
    margin-top: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`;
