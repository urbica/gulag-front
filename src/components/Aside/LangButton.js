import styled from 'styled-components';

export default styled.button`
  padding: 0 0 5px;
  border: none;
  border-bottom: ${({ isActive }) => (isActive ? '5px' : 0)} solid
    rgba(226, 243, 227, 0.8);
  margin: 0 25px 0 0;
  font-size: 20px;
  font-weight: 900;
  color: rgba(226, 243, 227, ${({ isActive }) => (isActive ? '0.8' : '0.3')});
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.4s;

  &:hover {
    transition: opacity 0.4s;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;
