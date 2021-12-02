import React from "react";
import * as Styles from "./styles";
import { VscCode } from "react-icons/vsc";
import { usePortfolio } from "../../context/AuthContext";

const Main: React.FC = () => {
  const { setAbout, about } = usePortfolio();

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
        <Styles.ButtonMain onClick={() => setAbout(!about)}>
          Sobre mim
        </Styles.ButtonMain>
      </Styles.MainContent>
    </Styles.MainWrapper>
  );
};

export default Main;
