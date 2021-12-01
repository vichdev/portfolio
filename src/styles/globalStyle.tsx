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
