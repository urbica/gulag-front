import styled from 'styled-components';

export default styled.div`
  font-size: 16px;
  line-height: 1.56;
  color: rgba(226,243,227,0.8);
  opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};
  transition: 0.4s;
`;
