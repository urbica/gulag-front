import styled from 'styled-components';
import ButtonTemplate from './ButtonTemplate';

export default styled(ButtonTemplate)`
  pointer-events: auto;
  background-color: rgba(0,0,0,.5);
  &:hover {
    background-color: rgba(0,0,0,.7);
  }
  &:active {
    background-color: rgb(0,0,0);
  }
`;
