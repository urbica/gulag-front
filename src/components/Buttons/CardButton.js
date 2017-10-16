import styled from 'styled-components';
import ButtonTemplate from './ButtonTemplate';

export default styled(ButtonTemplate)`
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    background-color: rgba(93,106,119,.1);
  }

  &:active {
    background-color: rgba(93,106,119,.2);
  }
`;
