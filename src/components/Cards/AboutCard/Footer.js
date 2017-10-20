import styled from 'styled-components';
import { cardBackgroundColor } from '../../../config/styles';

export default styled.footer`
  display: flex;
  padding: 20px 40px;

  align-items: flex-start;

  background-color: ${cardBackgroundColor};

  & a {
    display: inline-block;
    height: 40px;

    font-size: 12px;
    text-decoration: none;
    color: rgba(219, 235, 219, .5);
  }

  & a:first-child {
    margin-right: 40px;
  }

  & > img {
    margin-right: 40px;
  }
`;
