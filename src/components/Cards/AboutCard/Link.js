import styled from 'styled-components';
import { color } from '../../../config/styles';

export default styled.a`
  display: inline-block;
  padding-bottom: 2px;
  border-bottom: 4px solid ${color};

  color: ${color};
  text-decoration: none;

  transition: 0.4s;

  &:hover {
    border-bottom: 4px solid transparent;

    transition: 0.4s;
  }
`;
