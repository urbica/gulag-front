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

  transition: 0.5s;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;

    border-radius: 4px;

    background-color: rgba(0, 0, 0, 0.9);
  }
`;
