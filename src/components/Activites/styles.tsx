import styled, { keyframes } from "styled-components";
import { Button } from "../../common/Button/styles";

const ActivityAnimation = keyframes`
0% { left: 0px; bottom: -100%;}
100% {left: 0px; bottom: 0px;}
`;

const ActivityAnimationBackWard = keyframes`
100% { left: 0px; bottom: -100%;}
0% {left: 0px; bottom: 0px;}
`;

export const ProjectsWrapper = styled.div<{ animate?: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: -100%;
  left: 0px;
  z-index: 2999;
  animation-name: ${(props) =>
    props.animate !== undefined &&
    (props.animate ? ActivityAnimation : ActivityAnimationBackWard)};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  @media (max-width: 800px) and (min-width: 320px) {
    width: 100%;
    display: flex;
    height: 100vh;
    flex-direction: column;
    overflow-y: auto;
    bottom: -100%;
    left: 0px;
  }
`;

export const TitleWrapper = styled.div`
  padding: 1rem;
  position: absolute;
  align-items: center;
  top: 1.25rem;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #111111;
  margin-right: 1rem;
`;

export const ResetButton = styled(Button)`
  width: 2rem;
  height: 2rem;
  display: flex;
  margin-right: 1rem;
  align-items: center;
  padding: 5px;
`;

export const ProjectsContainer = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 60%;
  display: ${(props) => (props.isSelected ? "flex" : "none")};
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;

export const Projects = styled.div<{ color: string; shadowColor: string }>`
  width: 12rem;
  height: 12rem;
  display: flex;
  border: 2px solid;
  border-color: ${(props) => props.color};
  padding: 1.5rem;
  justify-content: center;
  border-radius: 9999rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 15px 1px ${(props) => props.shadowColor};
  }
`;

export const TechWrapper = styled.div<{ color: string }>`
  display: flex;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  svg {
    font-size: 6rem;
    color: ${(props) => props.color};
  }
`;

export const TechName = styled.span`
  color: #111111;
  font-size: 1rem;
`;

export const ButtonWrapper = styled.div`
  width: 290px;
  justify-content: space-around;
  display: flex;
  position: absolute;
  top: 30px;
  right: 100px;

  @media (max-width: 800px) and (min-width: 320px) {
    width: 100%;
    top: 10px;
    justify-content: space-evenly;
    align-items: center;
    right: 0;
  }
`;

export const BackButton = styled(Button)`
  svg {
    position: relative;
    right: 15px;

    top: 2px;
  }
  &:hover {
    svg {
      color: #fff;
    }
  }
`;

export const ContactButton = styled(Button)``;

export const SelectedProjectsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const SelectedsProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 2rem;
  padding: 1rem;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;
  box-shadow: -1px -1px 15px 1px var(--primary);
  justify-content: space-evenly;
  width: 100%;
  max-width: 18rem;
  height: 100%;
  max-height: 25rem;
  min-height: 25rem;
  margin-bottom: 2rem;
  &:hover {
    opacity: 0.9;
    border: 2px solid var(--red);
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--primary);
`;

export const SelectedsProjectsTitle = styled.h1``;

export const SelectedsProjectsDescription = styled.span``;

export const TitleImgWrapper = styled.div`
  display: flex;
  height: 100%;
  max-height: 8rem;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;

export const SelectedProjectsImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 9999em;
  background-color: ${(props) => (props.color ? props.color : "#000")};
  align-items: center;
  display: flex;
  padding: 5px;
  box-shadow: 1px 1px 9px 1px #000;
`;

export const SelectedObservation = styled.span`
  margin-top: 1rem;
  color: red;
`;

export const TabsWrapper = styled.div`
  position: absolute;
  left: 5rem;
  top: 0.75rem;
`;
