import styled from 'styled-components';

export default styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(0,0,0,.5);
  white-space: pre;
  color: #fff;
  z-index: 1;
  @media (max-width: 375px) {
    justify-content: space-between;
  }
`;
