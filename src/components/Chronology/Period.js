import styled from 'styled-components';

export default styled.div`
  position: relative;

  margin-bottom: 30px;

  font-size: 14px;

  opacity: 0.8;
  
  &:before {
    content: '';
    position: absolute;
    top: 6px;
    left: -31px;

    display: block;
    width: 11px;
    height: 11px;
    border: solid 1px #e2f3e3;
    border-radius: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    top: 25px;
    bottom: -38px;
    left: -25px;

    display: block;
    width: 1px;

    background-color: rgba(226,243,227,0.2);
  }
  
  &:last-child:after {
    display: none;
  }
`;
