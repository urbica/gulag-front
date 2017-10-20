import styled from 'styled-components';
import { cardBackgroundColor } from '../../../config/styles';

export default styled.div`
  position: fixed;
  top: 60px;
  right: 0;

  width: 400px;
  max-height: 590px;
  padding: 40px 60px 60px 40px;

  background-color: ${cardBackgroundColor};

  overflow: scroll;
  z-index: 1;
`;
