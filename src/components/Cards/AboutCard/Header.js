import styled from 'styled-components';

export default styled.header`
  display: flex;
  flex-shrink: 0;
  padding: 40px 0 14px 40px;

  background-color: #000;

  @media (max-width: 425px) {
    padding: 20px 0 0 20px;
  }
`;
