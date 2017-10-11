import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  width: ${({ width }) => width}px;
  padding-top: 12px;
  padding-left: 7px;

  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);

  background-color: rgba(0, 0, 0, .${({ id }) => (id % 2 ? '2' : '1')});

  user-select: none;
  cursor: default;

  &:hover {
    color: #fff;

    background-color: rgba(0, 0, 0, 0.3);
  }
`;
