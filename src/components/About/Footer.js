import styled from 'styled-components';

export default styled.footer`
  display: flex;
  align-items: flex-end;
  padding-top: 50px;
  border-top: 1px solid rgba(226, 243, 227, 0.2);
  margin-bottom: 70px;

  & a {
    margin-right: 60px;
  }

  & a:last-child {
    margin-bottom: 20px;
  }

  & a img {
    transition: 0.4s;
  }

  & a:hover img {
    opacity: 0.6;
    transition: 0.4s;
  }
`;
