import styled from 'styled-components';

const colors = {
  0: '235,66,0',
  1: '204,145,51',
  2: '42,167,148',
  3: '39,73,241',
  4: '136,68,119',
  5: '23,149,211'
};

const disableColor = '122,133,126';

export default styled.div`
  width: 40px;
  height: 22px;

  border-radius: 11px;

  background-color: rgba(${({ isActive, typeId }) => (isActive ? colors[typeId] : disableColor)}, 0.2);

  transition: 0.4s;
  &:after {
    content: '';
    display: block;
    width: 22px;
    height: 22px;

    border-radius: 50%;
    background-color: rgba(${({ isActive, typeId }) => (isActive ? colors[typeId] : disableColor)}, 1);
    transform: translateX(${({ isActive }) => (isActive ? '18px' : 0)});

    transition: 0.4s;
  }
`;
