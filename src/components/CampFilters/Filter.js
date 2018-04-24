import styled from 'styled-components';

export default styled.div`
  margin-bottom: 40px;

  transition: 0.4s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.4s;
  }
`;
