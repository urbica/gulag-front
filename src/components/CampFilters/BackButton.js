import styled from 'styled-components';

export default styled.button`
  padding: 0;
  border: none;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
