import styled from 'styled-components';
import ButtonTemplate from './ButtonTemplate';

export default styled(ButtonTemplate)`
  flex-shrink: 0;

  &:hover {
    background-color: rgba(0,0,0,.2);
  }

  &:active {
    background-color: rgb(0,0,0);
  }
`;
