import styled from 'styled-components';

export default styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding-top: 50px;
  border-top: 1px solid rgba(226, 243, 227, 0.2);
  margin-bottom: 70px;

  & a {
    margin-right: 60px;
  }

  & a img {
    transition: 0.4s;
  }

  & a:hover img {
    opacity: 0.6;
    transition: 0.4s;
  }
`;
