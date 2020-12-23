import { createGlobalStyle } from 'styled-components';

//  sm: "640px"
//  md: "768px"
//  lg: "1024px"
//  xl: "1280px"

const GlobalStyle = createGlobalStyle`
*, ::after,::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #FAFCFF;
  font-size: 16px;
  color: #0D1121;
}
`;

export default GlobalStyle;
