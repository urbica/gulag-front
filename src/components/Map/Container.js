import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  bottom: 0;

  width: 100%;
  height: 100vh;

  transform: translateY(${({ slideUp }) => (slideUp ? '-30%' : '0')});
  transition: 0.4s;

  & .mapboxgl-ctrl-attrib {
    opacity: 0.3;
    background-color: inherit;
  }
`;
