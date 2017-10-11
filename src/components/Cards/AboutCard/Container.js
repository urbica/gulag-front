import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  width: 600px;

  color: #fff;

  z-index: 1;

  @media (max-width: 599px) {
    width: 100%;
  }
`;
