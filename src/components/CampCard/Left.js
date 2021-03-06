import styled from 'styled-components';

export default styled.div`
  flex: 1 1 450px;

  padding-right: 60px;

  columns: 450px;
  column-gap: 60px;

  @media (max-width: 425px) {
    display: flex;
    padding-right: 0;

    flex-wrap: wrap;
    align-content: flex-start;
  }
`;
