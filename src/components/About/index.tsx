import React from "react";
import * as Styles from "./styles";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiVuedotjs,
  SiJest,
} from "react-icons/si";
import { FaAngleLeft } from "react-icons/fa";
import foto from "../../assets/personalfoto.jpg";
import { usePortfolio } from "../../context/Context";

const About: React.FC = () => {
  const { about, setAbout, experience, setExperience } = usePortfolio();

  return (
    <Styles.AboutWrapper animation={about}>
      <Styles.ButtonWrapper>
        <Styles.BackButton onClick={() => setAbout(!about)}>
          <FaAngleLeft />
          Voltar
        </Styles.BackButton>
        <Styles.ButtonExperience
          onClick={function () {
            setExperience(!experience);
            setAbout(!about);
          }}
        >
          Experiências
        </Styles.ButtonExperience>
      </Styles.ButtonWrapper>
      <Styles.AboutContainer>
        <Styles.AboutImg src={foto} />
        <Styles.AboutContent>
          <Styles.AboutTitle>Victor Hugo</Styles.AboutTitle>
          <Styles.AboutH2>Desenvolvedor Front-End </Styles.AboutH2>
          <Styles.AboutParagraph>
            Olá, meu nome é Victor Hugo, tenho 23 anos, sou de Aracaju/SE,
            atualmente cursando{" "}
            <Styles.AboutSpan>
              {" "}
              Análise e Desenvolvimentos de Sistemas pela Estácio de Sá
            </Styles.AboutSpan>
            &nbsp;, focando no desenvolvimento web há mais de dois anos, sempre
            criando projetos pessoais diversos para manter a prática em dia.
          </Styles.AboutParagraph>
          <Styles.AboutParagraph>
            Assim, busco desempenhar meu trabalho com excelência,&nbsp;
            <Styles.AboutSpan>
              desenvolvendo aplicações web de alta qualidade, com código limpo,
              com boas práticas e responsivos
            </Styles.AboutSpan>
            , que se traduza em um site agradável de usar e manter. Sempre
            buscando me aperfeiçoar cada vez mais nas tecnologias e práticas.
          </Styles.AboutParagraph>
          <Styles.AboutParagraph>
            Atualmente trabalho como&nbsp;
            <Styles.AboutSpan>DESENVOLVEDOR FRONT-END JR I</Styles.AboutSpan>,
            na Avonale Workplace.
          </Styles.AboutParagraph>
          <Styles.AboutH2>Tecnologias</Styles.AboutH2>
          <Styles.TechnologiesWrappper color={"none"}>
            <SiReact color={"#04A5CF"} />
            <SiVuedotjs color="#42b883" />
            <SiJavascript color={"#F7E018"} />
            <SiTypescript color={"#017ACC"} />
            <SiHtml5 color={"#E34C26"} />
            <SiCss3 color={"#016ABB"} />
            <SiGit color={"#F64D27"} />
            <SiJest color="#99425b" />
          </Styles.TechnologiesWrappper>
        </Styles.AboutContent>
      </Styles.AboutContainer>
    </Styles.AboutWrapper>
  );
};

export default About;
