import React from "react";
import * as Styles from "./styles";
import pokestats from "../../assets/pokemon.svg";
import loveflix from "../../assets/loveflix.png";
import tictactoe from "../../assets/tictactoe.png";
import dtmoney from "../../assets/logo.svg";
import { FaAngleLeft } from "react-icons/fa";
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
        <Styles.TitleWrapper>
          <Styles.ProjectsTitle>PROJETOS</Styles.ProjectsTitle>
          <Styles.ProjectsSpan>
            Principais projetos que já desenvolvi.
            <Styles.PAnimated panimation={project} />
          </Styles.ProjectsSpan>
        </Styles.TitleWrapper>
        <Styles.ProjectsContent>
          <Styles.ProjWrapper>
            <Styles.ProjImg src={pokestats} color={"#00b1f7"} />
            <Styles.Projects>
              <Styles.ProjectLink href={"https://pokestats-vich.netlify.app"}>
                PokeStats
              </Styles.ProjectLink>
              <Styles.ProjSpan>Website | 2021</Styles.ProjSpan>
              <Styles.ProjsParagraph>
                Site desenvolvido com intuito de praticar e estudar context API
                e o consumo de APIs.
              </Styles.ProjsParagraph>
            </Styles.Projects>
          </Styles.ProjWrapper>
          <Styles.ProjWrapper>
            <Styles.ProjImg src={tictactoe} color={"#E64C65"} />
            <Styles.Projects>
              <Styles.ProjectLink href={"https://tictactoe-vich.netlify.app"}>
                TicTacToe | Jogo da velha
              </Styles.ProjectLink>
              <Styles.ProjSpan>Website | 2021</Styles.ProjSpan>
              <Styles.ProjsParagraph>
                Jogo da velha desenvolvido em JavaScript.
              </Styles.ProjsParagraph>
            </Styles.Projects>
          </Styles.ProjWrapper>
          <Styles.ProjWrapper>
            <Styles.ProjImg src={loveflix} color={"#000"} />
            <Styles.Projects>
              <Styles.ProjectLink>LoveFlix</Styles.ProjectLink>
              <Styles.ProjSpan>Website | 2021</Styles.ProjSpan>
              <Styles.ProjsParagraph>
                Site Ainda em desenvolvimento com coparticipação com Leonardo
                Antunes, para randomizar opções de comida, bebida, filmes e
                entre outros para uma noite de filmes entre amigos ou casais.
              </Styles.ProjsParagraph>
            </Styles.Projects>
          </Styles.ProjWrapper>
          <Styles.ProjWrapper>
            <Styles.ProjImg src={dtmoney} color={"#5429CC"} />
            <Styles.Projects>
              <Styles.ProjectLink href={"https://dt-money-vh.netlify.app"}>
                Dt Money | Rocketseat
              </Styles.ProjectLink>
              <Styles.ProjSpan>Website | 2022</Styles.ProjSpan>
              <Styles.ProjsParagraph>
                Projeto desenvolvido no curso de ReactJS pela rocketseat,
                utilizando mirageJS como MockAPI, simulando uma planilha de
                gastos. (Infelizmente a API funciona apenas localmente, para
                rodar, baixar pelo GitHub.)
              </Styles.ProjsParagraph>
            </Styles.Projects>
          </Styles.ProjWrapper>
        </Styles.ProjectsContent>
      </Styles.ProjectsContainer>
    </Styles.ProjectsWrapper>
  );
};

export default Activity;
