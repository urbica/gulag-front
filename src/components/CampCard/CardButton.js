import styled from 'styled-components';
import Button from '../Button';

export default styled(Button)`
  position: absolute;
  top: 0;
  right: 0;

  background-color: transparent;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;

    border-radius: 4px;

    background-color: rgba(0, 0, 0, 0.9);
  }
`;
