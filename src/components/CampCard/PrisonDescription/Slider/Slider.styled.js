import styled, { keyframes } from 'styled-components';

import closeBtn from './group-9.svg';
import arrow from './group-9-copy.svg';

const showAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  opacity: ${({ isOpened }) => (isOpened ? '1' : '0')};
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: ${showAnimation} 0.5s ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1000;
`;

const Main = styled.div`
  top: 10vh;
  height: 60vh;
  //width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    max-height: 100%;
    max-width: 90vw;
    opacity: 0;
    animation: ${showAnimation} 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }

  article {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.85);
  }

  span {
    color: #fff;
  }
`;

const Gallery = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 100%;
    max-width: 90vw;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Img = styled.img`
  height: 50%;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.6')};
  cursor: pointer;
  margin-right: 0.8rem;
  z-index: 10;
`;

const Left = styled.div`
  position: absolute;
  width: 5vw;
  height: 5vw;
  top: 45%;
  left: 0;
  background: url(${arrow}) no-repeat 50% 50%;
  background-size: 30%;
  transform: rotate(180deg);
  cursor: pointer;
  opacity: 1;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;

const Right = styled.div`
  position: absolute;
  width: 5vw;
  height: 5vw;
  top: 45%;
  right: 0;
  background: url(${arrow}) no-repeat 50% 50%;
  background-size: 30%;
  cursor: pointer;
  opacity: 1;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;

const Close = styled.div`
  position: absolute;
  width: 5vw;
  height: 5vw;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 1) url(${closeBtn}) no-repeat 50% 50%;
  background-size: cover;
  cursor: pointer;
  opacity: 1;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export { Container, Main, Gallery, Img, Left, Right, Close, Wrapper };
