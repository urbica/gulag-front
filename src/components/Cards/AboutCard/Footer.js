import styled from 'styled-components';

export default styled.footer`
  display: flex;
  padding: 20px 40px;

  align-items: flex-start;

  background-color: #000;

  & a {
    display: inline-block;
    height: 40px;

    font-size: 12px;
    text-decoration: none;
    color: rgba(255, 255, 255, .5);
  }

  & a:first-child {
    margin-right: 40px;
  }

  & > img {
    margin-right: 40px;
  }
`;
