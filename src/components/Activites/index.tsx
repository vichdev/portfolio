import React from "react";
import * as Styles from "./styles";
import pokestats from "../../assets/pokemon.svg";
import loveflix from "../../assets/loveflix.png";
import { FaAngleLeft } from "react-icons/fa";
import Button from "../../common/Button";
import { usePortfolio } from "../../context/AuthContext";

const Activity: React.FC = () => {
  const { project, setProject, about, setAbout, contact, setContact } =
    usePortfolio();

  return (
    <Styles.ProjectsWrapper animate={project}>
      <Styles.ButtonWrapper>
        <Styles.BackButton
          onClick={function () {
            setProject(!project);
            setAbout(!about);
          }}
        >
          <FaAngleLeft />
          Voltar
        </Styles.BackButton>
        <Styles.ContactButton onClick={() => setContact(!contact)}>
          Contato
        </Styles.ContactButton>
      </Styles.ButtonWrapper>
      <Styles.ProjectsContainer>
        <Styles.PAnimated panimation={project} />
        <Styles.TitleWrapper>
          <Styles.ProjectsTitle>PROJETOS</Styles.ProjectsTitle>
          <Styles.ProjectsSpan>
            Principais projetos que já desenvolvi.
          </Styles.ProjectsSpan>
        </Styles.TitleWrapper>
        <Styles.ProjectsContent>
          <Styles.ProjWrapper>
            <Styles.ProjImg src={pokestats} color={"#00b1f7"} />
            <Styles.Projects>
              <Styles.ProjH3>PokeStats</Styles.ProjH3>
              <Styles.ProjSpan>Website</Styles.ProjSpan>
              <Styles.ProjsParagraph>
                Site desenvolvido com intuito de praticar e estudar context API
                e o consumo de APIs.
              </Styles.ProjsParagraph>
            </Styles.Projects>
          </Styles.ProjWrapper>
          <Styles.ProjWrapper>
            <Styles.ProjImg src={loveflix} color={"#000"} />
            <Styles.Projects>
              <Styles.ProjH3>LoveFlix</Styles.ProjH3>
              <Styles.ProjSpan>Website</Styles.ProjSpan>
              <Styles.ProjsParagraph>
                Site Ainda em desenvolvimento com Leonardo Antunes, para
                randomizar opções de comida, bebida, filmes e entre outros para
                uma noite de filmes entre amigos ou casais.
              </Styles.ProjsParagraph>
            </Styles.Projects>
          </Styles.ProjWrapper>
        </Styles.ProjectsContent>
      </Styles.ProjectsContainer>
    </Styles.ProjectsWrapper>
  );
};

export default Activity;
