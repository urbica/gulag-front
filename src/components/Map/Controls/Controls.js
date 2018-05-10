import styled from 'styled-components';

import { defaultBackground } from '../../../config/styles';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  top: calc(${({ slideUp }) => (slideUp ? '19%' : '50%')} - 76px);
  right: 20px;

  width: 50px;
  height: 100px;
  border-radius: 25.5px;

  background-color: ${defaultBackground};

  z-index: 1;

  @media (max-width: 925px) {
    display: none;
  }
`;
