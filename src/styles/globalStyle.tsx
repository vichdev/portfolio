import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --red: #d71e47;
  --primary: #333333;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

body{
  font: 400 14px Roboto, sans-serif;

  animation-duration: 0s;
  z-index: 1;
  -webkit-animation-duration: 0s ;
  transition: background-color 0s, opacity 0s, color 0s, width 0s, height 0s, padding 0s, margin 0s ;
  overflow: hidden;
}

input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}

button {
  cursor: pointer;
}

`;
