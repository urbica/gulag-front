import styled from 'styled-components';

export default styled.header`
  position: fixed;

  display: flex;
  width: 430px;

  z-index: 1;

  @media (max-width: 429px) {
    width: 100%;
  }
`;
