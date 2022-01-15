import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

body{
  font: 400 14px Roboto, sans-serif;
  backdrop-filter: blur(7px);
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  animation-duration: 0s;
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
