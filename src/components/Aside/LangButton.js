import styled from 'styled-components';

export default styled.button`
  padding: 0 0 5px;
  border: none;
  border-bottom: ${({ isActive }) => (isActive ? '5px' : 0)} solid rgba(226,243,227,0.8);
  margin: 0 25px 0 0;

  font-size: 20px;
  font-weight: 900;
  color: rgba(226,243,227,0.8);

  background-color: transparent;
`;
