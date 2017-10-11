import styled from 'styled-components';

export default styled.input`
  width: 100%;
  padding: 15px;
  padding-right: 106px;
  padding-left: 30px;
  border: solid 1px transparent;
  margin: 0;

  outline: none;

  font-size: 16px;
  color: rgba(225, 225, 225, 0.5);

  background-color: #000;

  @media (max-width: 425px) {
    padding-left: 20px;
  }
`;
