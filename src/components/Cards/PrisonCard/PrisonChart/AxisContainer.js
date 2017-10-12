import styled from 'styled-components';

export default styled.g`
  & path,
  & line {
    stroke: #fff;
    stroke-width: 1;
    opacity: 0.25;
  }

  & text {
    font-family: 'Formular';
    font-size: 12px;
    fill: rgba(255,255,255,.5);
    transform: translateX(-10px);
  }
`;
