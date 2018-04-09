import styled from 'styled-components';
import Button from '../../Button';

export default styled(Button)`
  margin-bottom: 28px;

  background-color: rgba(0, 0, 0, 0.5);

  pointer-events: auto;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:active {
    background-color: rgb(0, 0, 0);
  }
`;
