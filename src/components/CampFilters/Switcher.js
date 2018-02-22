import styled from 'styled-components';

const colors = {
  0: '#ec3001',
  1: '#203f3b',
  2: '#7ed321',
  3: '#4c9af4',
  4: 'rebeccapurple',
  5: 'blue'
};

export default styled.div`
  width: 40px;
  height: 22px;
  background-color: ${({ typeId }) => colors[typeId]};
`;
