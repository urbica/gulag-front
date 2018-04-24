import styled from 'styled-components';

export default styled.button`
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 50%;
  margin: 0;
  cursor: pointer;
  outline: none;
  background-color: #14171a;

  & img {
    opacity: 0.6;
  }

  &:hover img {
    opacity: 0.8;
  }
`;
