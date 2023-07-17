import React from "react";
import * as Styles from "./styles";
import { usePortfolio } from "../../context/Context";
import victor from "../../assets/icon.png";

const Main: React.FC = () => {
  const { setAbout, about } = usePortfolio();

  return (
    <Styles.MainWrapper>
      <Styles.MainContent>
        <Styles.LogoWrapper>
          <Styles.LogoContent>
            <Styles.Image src={victor}></Styles.Image>
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
