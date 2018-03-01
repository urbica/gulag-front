import styled from 'styled-components';

export default styled.div`
  position: relative;
  min-height: 32px;
  background-color: rgba(20, 23, 26, .85);
  & div {
    position: absolute;
    bottom: 12px;
    left: 50%;

    width: 100%;

    font-style: italic;

    background-color: rgba(20, 23, 26, .85);
    
    transform: translateX(-50%);
  }
`;
