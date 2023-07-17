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
  SiTailwindcss,
  SiStyledcomponents,
  SiRedux,
  SiNextdotjs,
  SiNuxtdotjs,
  SiAwsamplify,
  SiNodedotjs,
  SiDocker,
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
        <Styles.AboutImgWrapper>
          <Styles.AboutImg src={foto} />
        </Styles.AboutImgWrapper>
        <Styles.AboutContent>
          <Styles.AboutTitle>Victor Hugo</Styles.AboutTitle>
          <Styles.AboutH2>Desenvolvedor Front-End </Styles.AboutH2>
          <Styles.AboutParagraph>
            Olá, meu nome é Victor Hugo, tenho 23 anos, sou de Aracaju/SE,
            atualmente cursando{" "}
            <Styles.AboutSpan>
              {" "}
              Análise e Desenvolvimentos de Sistemas pela Universidade Estácio
              de Sá
            </Styles.AboutSpan>
            , fluente no desenvolvimento web front end, desenvolvendo grandes
            aplicações a nível nacional e escaláveis, principalmente B2B&#39;s
            do mundo automotivo.
          </Styles.AboutParagraph>
          <Styles.AboutParagraph>
            Busco desempenhar meu trabalho com excelência,&nbsp;
            <Styles.AboutSpan>
              desenvolvendo aplicações web de alta qualidade, com código limpo e
              boas práticas
            </Styles.AboutSpan>
            , que se traduza em um site agradável de se usar e manter.
          </Styles.AboutParagraph>
          <Styles.AboutParagraph>
            Atualmente trabalho como&nbsp;
            <Styles.AboutSpan>DESENVOLVEDOR FRONT-END JR IV</Styles.AboutSpan>,
            na Avonale Workplace.
          </Styles.AboutParagraph>
          <Styles.AboutH2>Tecnologias</Styles.AboutH2>
          <Styles.TechnologiesWrappper color={"none"}>
            <SiReact color={"#04A5CF"} />
            <SiVuedotjs color="#42b883" />
            <SiNextdotjs color={"#000000"} />
            <SiNuxtdotjs color="#42b883" />
            <SiNodedotjs color="#5aaa46" />
            <SiJavascript color={"#F7E018"} />
            <SiTypescript color={"#017ACC"} />
            <SiHtml5 color={"#E34C26"} />
            <SiCss3 color={"#016ABB"} />
            <SiGit color={"#F64D27"} />
            <SiJest color="#99425b" />
          </Styles.TechnologiesWrappper>
          <Styles.AboutH2>Outras tecnologias</Styles.AboutH2>
          <Styles.TechnologiesWrappper color={"none"}>
            <SiTailwindcss color={"#04A5CF"} />
            <SiRedux color={"#764abc"} />
            <SiStyledcomponents color="#ca5fb3" />
            <SiAwsamplify color={"#04A5CF"} />
            <SiDocker color={"#04A5CF"} />
          </Styles.TechnologiesWrappper>
        </Styles.AboutContent>
      </Styles.AboutContainer>
    </Styles.AboutWrapper>
  );
};

export default About;
