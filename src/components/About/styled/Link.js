import styled from 'styled-components';

export default styled.a`
  display: inline-block;
  padding-bottom: 2px;
  border-bottom: 4px solid #e2f3e3;
  margin-bottom: 10px;

  line-height: 22px;
  color: #e2f3e3;
  text-decoration: none;

  transition: 0.4s;
  
  &:hover {
    border-bottom: 4px solid transparent;

    transition: 0.4s;
  }
`;
