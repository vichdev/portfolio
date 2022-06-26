import React from "react";
import About from "./components/About";
import Activity from "./components/Activites";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import { Context } from "./context/Context";
import { GlobalStyle } from "./styles/globalStyle";

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyle />
      <Wrapper>
        <Contact />
        <Main />
        <Experience />
        <About />
        <Activity />
      </Wrapper>
    </Context>
  );
};

export default App;
