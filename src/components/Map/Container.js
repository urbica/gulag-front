import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: ${({ slideUp }) => (slideUp ? '-30%' : '0')};
  bottom: 0;
  width: 100%;
  transition: .4s;
  z-index: 0;

  & .mapboxgl-ctrl-attrib {
    opacity: 0.3;
    background-color: inherit;
  }
`;
