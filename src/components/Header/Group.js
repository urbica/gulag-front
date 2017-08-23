import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  & svg {
    margin-right: 5px;
    min-width: 22px;
  }
  & div {
    width: 100%;
  }
  @media (max-width: 1023px) {
    & svg {
      display: none;
    }
  }
  @media (max-width: 425px) {
    flex-basis: 33%;
    margin-left: 0;
    text-align: center;
  }
`;
