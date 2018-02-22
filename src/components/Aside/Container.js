import styled from 'styled-components';

export default styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;
  height: 100%;
  padding: 50px 40px;

  background-color: #14171a;
  
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : '-400px')});
  transition: .4s;
`;
