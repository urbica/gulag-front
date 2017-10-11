import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  bottom: 0;

  width: 430px;

  color: #fff;

  overflow: scroll;
  z-index: 2;

  @media (max-width: 429px) {
    width: 100%;
  }
`;
