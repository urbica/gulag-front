import styled from 'styled-components';
import Button from '../Button';

export default styled(Button)`
  position: absolute;
  top: 0;
  right: 0;

  &:active {
    background-color: rgba(93, 106, 119, 0.2);
  }
`;
