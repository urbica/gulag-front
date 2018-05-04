import styled from 'styled-components';

export default styled.button`
  display: block;
  padding: 0;
  border: none;
  margin-bottom: 40px;

  font-size: 20px;
  font-weight: 900;
  color: #e2f3e3;

  background-color: transparent;

  opacity: 0.8;

  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;
