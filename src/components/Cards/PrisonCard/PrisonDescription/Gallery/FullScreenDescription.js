import styled from 'styled-components';

export default styled.div`
  position: relative;
  min-height: 32px;
  background-color: rgba(0,0,0,0.85);
  & div {
    position: absolute;
    bottom: 12px;
    left: 50%;

    width: 100%;

    font-style: italic;

    background-color: rgba(0, 0, 0, 0.7);
    
    transform: translateX(-50%);
  }
`;
