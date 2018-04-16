import styled from 'styled-components';
import Button from '../Button';

export default styled(Button)`
  position: absolute;
  top: 40px;
  right: 30px;
  padding: 0;
  border: none;
  margin: 0;
  background-color: transparent;
  transition: 0.3s;

  &:hover {
    background-color: #1b2128;
  }

  &:active {
    background-color: rgba(93, 106, 119, 0.2);
  }
`;
