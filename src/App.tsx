import React from "react";
import About from "./components/About";
import Main from "./components/Main";
import { GlobalStyle } from "./styles/globalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <About />
      <Main />
    </>
  );
};

export default App;
