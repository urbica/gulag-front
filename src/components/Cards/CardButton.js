import styled from 'styled-components';
import Button from '../Button';

export default styled(Button)`
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    background-color: #1B2128;
  }

  &:active {
    background-color: rgba(93,106,119,.2);
  }
`;
