import styled from 'styled-components';

export default styled.div`
  flex-grow: 1;
  padding: 0 60px 0 40px;
  border-bottom: 1px solid rgba(46,55,67,.3);

  background-color: #000;

  @media (max-width: 425px) {
    padding: 0 20px;

    line-height: 1.5;
  }
`;
