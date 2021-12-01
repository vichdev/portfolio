import React from "react";
import * as Styles from "./styles";
import { VscCode } from "react-icons/vsc";

const Main: React.FC = () => {
  return (
    <Styles.MainWrapper>
      <Styles.MainContent>
        <Styles.LogoWrapper>
          <VscCode />
          <Styles.LogoContent>
            <Styles.LogoTitle>Victor Hugo</Styles.LogoTitle>
            <Styles.LogoSpan>Desenvolvedor Front-END</Styles.LogoSpan>
          </Styles.LogoContent>
        </Styles.LogoWrapper>
        <Styles.ButtonMain>Sobre mim</Styles.ButtonMain>
      </Styles.MainContent>
    </Styles.MainWrapper>
  );
};

export default Main;
