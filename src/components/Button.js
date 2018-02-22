import styled from 'styled-components';

export default styled.button`
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 50%;
  margin: 0;

  outline: none;

  background-color: #14171a;

  & img {
    opacity: .6;
  }

  &:hover img {
    opacity: .8;
  }
`;
