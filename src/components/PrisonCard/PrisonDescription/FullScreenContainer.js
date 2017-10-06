import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vh;

  background-color: rgba(0, 0, 0, 0.9);

  z-index: 3;

  img {
    max-width: 100%;
    max-height: calc(100vh - 10%);
  }
`;
