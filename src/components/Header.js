import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <Wrapper><h1>Countries in the world</h1></Wrapper>;
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: rgba(255, 255, 255, 0.7);
  height: 10vh;
  min-height: 60px; 
  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
`;

export default Header;
