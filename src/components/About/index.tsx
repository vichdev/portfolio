import React from "react";
import * as Styles from "./styles";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";
import { FaAngleLeft } from "react-icons/fa";
import foto from "../../assets/foto.jpeg";

import Button from "../../common/Button";

const About: React.FC = () => {
  return (
    <Styles.AboutWrapper>
      <Styles.ButtonWrapper>
        <Styles.BackButton>
          <FaAngleLeft />
          Voltar
        </Styles.BackButton>
        <Button text={"Projetos"} />
      </Styles.ButtonWrapper>
      <Styles.AboutContainer>
        <Styles.AboutImg src={foto} />
        <Styles.AboutContent>
          <Styles.AboutTitle>Victor Hugo</Styles.AboutTitle>
          <Styles.AboutH2>Desenvolvedor Front-End </Styles.AboutH2>
          <Styles.AboutParagraph>
            Olá, meu nome é Victor Hugo, tenho 22 anos, sou de Aracaju/SE,
            atualmente cursando{" "}
            <Styles.AboutSpan>
              {" "}
              Análise e Desenvolvimentos de Sistemas pelo IFS - Instituto
              Federal de Sergipe
            </Styles.AboutSpan>
            . Porém estudando desenvolvimento web há 3 meses, sempre criando
            projetos diversos para manter a prática em dia.
          </Styles.AboutParagraph>
          <Styles.AboutParagraph>
            Assim, busco desempenhar meu trabalho com excelência,
            <Styles.AboutSpan>
              desenvolvendo aplicações web de alta qualidade, com código limpo,
              com boas práticas e responsivos
            </Styles.AboutSpan>
            , que se traduza em um site agradável de usar e manter. Sempre
            buscando me aperfeiçoar cada vez mais nas tecnologias e práticas.
          </Styles.AboutParagraph>
          <Styles.AboutParagraph>
            Atualmente estou procurando meu primeiro emprego como
            <Styles.AboutSpan> DESENVOLVEDOR FRONT-END</Styles.AboutSpan>,
            disposto a realizar testes para provar minha capacidade!
          </Styles.AboutParagraph>
          <Styles.AboutH2>Tecnologias</Styles.AboutH2>
          <Styles.TechnologiesWrappper color={"none"}>
            <SiHtml5 color={"#E34C26"} />
            <SiCss3 color={"#016ABB"} />
            <SiJavascript color={"#F7E018"} />
            <SiReact color={"#04A5CF"} />
            <SiTypescript color={"#017ACC"} />
            <SiGit color={"#F64D27"} />
          </Styles.TechnologiesWrappper>
        </Styles.AboutContent>
      </Styles.AboutContainer>
    </Styles.AboutWrapper>
  );
};

export default About;
