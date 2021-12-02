import React from "react";
import About from "./components/About";
import Activity from "./components/Activites";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import { Context } from "./context/AuthContext";
import { GlobalStyle } from "./styles/globalStyle";

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyle />
      <Wrapper>
        <Contact />
        <Main />
        <About />
        <Activity />
      </Wrapper>
    </Context>
  );
};

export default App;
