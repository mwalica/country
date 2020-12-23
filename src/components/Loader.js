import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <Wrapper>
      <Square>
        <div></div>
        <div></div>
      </Square>
    </Wrapper>
  );
};

const spinnerOne = keyframes`
    0% {transform: rotate(0deg); border-width: 10px;}
    50% {transform: rotate(180deg); border-width: 1px;}
    100% {transform: rotate(360deg); border-width: 10px;}
`

const spinnerTwo = keyframes`
    0% {transform: rotate(0deg); border-width: 1px;}
    50% {transform: rotate(180deg); border-width: 10px;}
    100% {transform: rotate(360deg); border-width: 1px;}
`

const Wrapper = styled.div``;

const Square = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  perspective: 200px;
  div {
    position: absolute;
    top: 0;
    height: 50%;
    width: 50px;
    background: coral;
    animation: ${flip} 2s linear infinite;
    transform-origin: right bottom;
    &:nth-child(2) {
      border: 10px solid transparent;
      border-bottom-color: #ad60f5;
      animation: ${spinnerTwo} 1.2s linear infinite;
    }
  }
`;



export default Loader;
