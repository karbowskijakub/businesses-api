import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, *::after, *::before {
  box-sizing: inherit;
}
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
a, button {
  font-family: 'Montserrat', sans-serif;
}
::-webkit-scrollbar {
  width: 0px;
  background-color: none;
}

`;
export default GlobalStyles;
