import styled from 'styled-components';

export default styled.div`
  padding: 15px 30px 20px;
  border-bottom: 1px solid rgba(46,55,67,.3);

  color: rgba(255,255,255,.8);

  background-color: #000;

  &:hover {
    background-color: #090b0c;
  }

  &:first-child {
    border-top: 1px solid rgba(46,55,67,.3);
    margin-top: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`;
