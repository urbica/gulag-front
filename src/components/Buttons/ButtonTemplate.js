import styled from 'styled-components';

export default styled.button`
  width: 50px;
  height: 50px;
  padding: 0;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  margin: 0;
  background-color: transparent;
  outline: none;
  & img {
    width: 100%;
    opacity: .6;
  }
  &:hover img {
    opacity: .8;
  }
`;
