import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  text-align: center;

  img {
    max-width: 100%;
    max-height: 400px;

    &:hover + button {
      display: inline-block;
    }
  }
`;
