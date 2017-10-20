import styled from 'styled-components';
import Button from '../../Button';

export default styled(Button)`
  flex-shrink: 0;

  &:hover {
    background-color: rgba(0,0,0,.2);
  }

  &:active {
    background-color: rgb(0,0,0);
  }
`;
