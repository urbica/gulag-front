import styled from 'styled-components';

export default styled.button`
  position: absolute;
  top: 40px;
  right: 30px;

  padding: 0;
  border: none;
  margin: 0;

  background-color: transparent;

  transition: .3s;
  &:hover {
    opacity: .8;
    transition: .3s;
  }
`;
