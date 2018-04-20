import styled from 'styled-components';
import Button from '../Button';

export default styled(Button)`
  position: fixed;
  top: 40px;
  right: 40px;
  padding: 0;
  border: none;
  margin: 0;
  outline: none;
  background-color: transparent;

  &:active {
    background-color: rgba(93, 106, 119, 0.2);
  }
`;
