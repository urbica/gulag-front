import styled from 'styled-components';
import { color } from '../../../../config/styles';

export default styled.div`
  h2 {
    margin-top: 0;
    margin-bottom: 10px;

    font-size: 20px;
    font-weight: bold;
  }
  
  p {
    margin-bottom: 40px;

    line-height: 1.7;
  }
  
  a {
    display: inline-block;
    padding-bottom: 2px;
    border-bottom: 4px solid ${color};
    margin-bottom: 10px;

    line-height: 22px;
    color: ${color};
    text-decoration: none;

    transition: 0.4s;

    &:hover {
      border-bottom: 4px solid transparent;

      transition: 0.4s;
    }
  }
  
  img {
    max-width: 100%;
  }
`;
