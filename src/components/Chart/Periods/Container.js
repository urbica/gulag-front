import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  bottom: 0;
  left: ${({ left }) => left}px;

  display: flex;
  width: ${({ width }) => width}px;

  color: #fff;

  pointer-events: auto;
  z-index: 1;

  @media (max-width: 1023px) {
    display: none;
  }
`;
