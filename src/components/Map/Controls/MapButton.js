import styled from 'styled-components';
import Button from '../../Button';

export default styled(Button)`
  width: 22px;
  height: 22px;

  pointer-events: auto;

  background-color: transparent;

  &:hover img {
    opacity: 0.5;
  }

  &:active img {
    opacity: 0.7;
  }
`;
