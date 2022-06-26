import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { SiReact, SiJavascript, SiVuedotjs } from "react-icons/si";
import { FaAngleLeft } from "react-icons/fa";
import { usePortfolio } from "../../context/Context";
import { projetos, Tecnologias } from "./data/projetos";
import Error from "../Error";

interface IProjects {
  name: string;
  descricao: string;
  tecnologia: Tecnologias;
  img_path: string;
  cor?: string;
  observacao?: string;
  url: string;
}

const Activity: React.FC = () => {
  const [projectsArray, setProjectsArray] = useState<Array<IProjects>>([]);
  const [displayProjects, setDisplayProjects] = useState<boolean>(true);

  useEffect(() => {
    console.log(displayProjects);
  });

  const {
    project,
    setProject,
    contact,
    setContact,
    experience,
    setExperience,
  } = usePortfolio();

  function selectReactProjects() {
    const reactProjects = projetos.filter((item) => {
      return item.tecnologia === Tecnologias.React;
    });
    setDisplayProjects(!displayProjects);
    setProjectsArray(reactProjects);
  }
  function selectVueProjects() {
    const vueProjects = projetos.filter((item) => {
      return item.tecnologia === Tecnologias.Vue;
    });
    setDisplayProjects(!displayProjects);
    setProjectsArray(vueProjects);
  }
  function selectNativeProjects() {
    const nativeProjects = projetos.filter((item) => {
      return item.tecnologia === Tecnologias.ReactNative;
    });
    setDisplayProjects(!displayProjects);
    setProjectsArray(nativeProjects);
  }
  function selectJavaScriptProjects() {
    const jsProjects = projetos.filter((item) => {
      return item.tecnologia === Tecnologias.Javascript;
    });
    setDisplayProjects(!displayProjects);
    setProjectsArray(jsProjects);
  }

  return (
    <Styles.ProjectsWrapper animate={project}>
      <Styles.ButtonWrapper>
        <Styles.BackButton
          onClick={function () {
            setProject(!project);
            setExperience(!experience);
          }}
        >
          <FaAngleLeft />
          Voltar
        </Styles.BackButton>
        <Styles.ContactButton onClick={() => setContact(!contact)}>
          Contato
        </Styles.ContactButton>
      </Styles.ButtonWrapper>
      {displayProjects ? (
        <Styles.TitleWrapper>
          <Styles.Title>Selecione uma tecnologia</Styles.Title>
        </Styles.TitleWrapper>
      ) : (
        <Styles.TitleWrapper>
          <Styles.ResetButton
            onClick={() => setDisplayProjects(!displayProjects)}
          >
            <FaAngleLeft />
          </Styles.ResetButton>
          <Styles.Title>Voltar para tecnologias</Styles.Title>
        </Styles.TitleWrapper>
      )}
      <Styles.SelectedProjectsWrapper isSelected={displayProjects}>
        {projectsArray.length > 0 ? (
          projectsArray.map((item, index) => {
            return (
              <Styles.ProjectLink key={index} href={item.url}>
                <Styles.SelectedsProjectsContainer>
                  <Styles.TitleImgWrapper>
                    <Styles.SelectedProjectsImg
                      src={`${item.img_path}`}
                      color={item.cor}
                    />
                    <Styles.SelectedsProjectsTitle>
                      {item.name}
                    </Styles.SelectedsProjectsTitle>
                  </Styles.TitleImgWrapper>
                  <Styles.SelectedsProjectsDescription>
                    {item.descricao}
                  </Styles.SelectedsProjectsDescription>
                  {item.observacao ? (
                    <Styles.SelectedObservation>
                      {item.observacao}
                    </Styles.SelectedObservation>
                  ) : (
                    ""
                  )}
                </Styles.SelectedsProjectsContainer>
              </Styles.ProjectLink>
            );
          })
        ) : (
          <Error />
        )}
      </Styles.SelectedProjectsWrapper>
      <Styles.ProjectsContainer isSelected={displayProjects}>
        <Styles.Projects
          color="#04A5CF"
          shadowColor="#04A5CF"
          onClick={() => {
            selectReactProjects();
          }}
        >
          <Styles.TechWrapper color="#04A5CF">
            <SiReact />
            <Styles.TechName>React</Styles.TechName>
          </Styles.TechWrapper>
        </Styles.Projects>
        <Styles.Projects
          color="#42b883"
          shadowColor="#42b883"
          onClick={() => selectVueProjects()}
        >
          <Styles.TechWrapper color="#42b883">
            <SiVuedotjs />
            <Styles.TechName>Vue</Styles.TechName>
          </Styles.TechWrapper>
        </Styles.Projects>
        <Styles.Projects
          color="#04A5CF"
          shadowColor="#04A5CF"
          onClick={() => selectNativeProjects()}
        >
          <Styles.TechWrapper color="#04A5CF">
            <SiReact />
            <Styles.TechName>React Native</Styles.TechName>
          </Styles.TechWrapper>
        </Styles.Projects>
        <Styles.Projects
          color="#F7E018"
          shadowColor="#F7E018"
          onClick={() => selectJavaScriptProjects()}
        >
          <Styles.TechWrapper color="#F7E018">
            <SiJavascript />
            <Styles.TechName>Javascript</Styles.TechName>
          </Styles.TechWrapper>
        </Styles.Projects>
      </Styles.ProjectsContainer>
    </Styles.ProjectsWrapper>
  );
};

export default Activity;
