import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { usePortfolio } from "../../context/Context";
import logo_avonale from "../../assets/avonale_logo.jpg";
import { empresas } from "./data/empresas";
import * as Styles from "./styles";

const Experience: React.FC = () => {
  const { project, setProject, about, setAbout, experience, setExperience } =
    usePortfolio();

  return (
    <Styles.ProjectsWrapper animate={experience}>
      <Styles.ButtonWrapper>
        <Styles.BackButton
          onClick={function () {
            setExperience(!experience);
            setAbout(!about);
          }}
        >
          <FaAngleLeft />
          Voltar
        </Styles.BackButton>
        <Styles.ProjectButton
          onClick={() => {
            setProject(!project);
            setExperience(!experience);
          }}
        >
          Projetos
        </Styles.ProjectButton>
      </Styles.ButtonWrapper>
      <Styles.ProjectsContainer>
        <Styles.TitleWrapper>
          <Styles.ProjectsTitle>Experiências</Styles.ProjectsTitle>
          <Styles.ProjectsSpan>
            Principais empresas em que já trabalhei.
            <Styles.PAnimated panimation={experience} />
          </Styles.ProjectsSpan>
        </Styles.TitleWrapper>
        <Styles.ExperienceContent>
          {empresas &&
            empresas.map((item, index) => {
              return (
                <Styles.ExperienceLink href={item.url} key={index}>
                  <Styles.ExperienceWrapper key={index}>
                    <Styles.ExperienceImg
                      src={logo_avonale}
                      color={"#17c8d2"}
                    />
                    <Styles.Projects>
                      <Styles.ExpNameWrapper>
                        <Styles.CompanyNameWrapper>
                          <Styles.CompanyName>{item.name}</Styles.CompanyName>
                          <Styles.ProjSpan>{item.localizacao}</Styles.ProjSpan>
                        </Styles.CompanyNameWrapper>
                        <Styles.CompanyJobWrapper>
                          <Styles.CompanyJob>{item.cargo}</Styles.CompanyJob>
                          <Styles.CompanyData>{item.data}</Styles.CompanyData>
                        </Styles.CompanyJobWrapper>
                      </Styles.ExpNameWrapper>
                      <Styles.ProjsParagraph>
                        {item.descricao}
                      </Styles.ProjsParagraph>
                    </Styles.Projects>
                  </Styles.ExperienceWrapper>
                </Styles.ExperienceLink>
              );
            })}
        </Styles.ExperienceContent>
      </Styles.ProjectsContainer>
    </Styles.ProjectsWrapper>
  );
};

export default Experience;
