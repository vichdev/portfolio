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
  background-color: #fff;
  display: flex;
  bottom: -100%;
  flex-direction: column;
  left: 0px;
  z-index: 2999;
  animation-name: ${(props) =>
    props.animate !== undefined &&
    (props.animate ? ActivityAnimation : ActivityAnimationBackWard)};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  @media (max-width: 850px) and (min-width: 320px) {
    width: 100%;
    display: flex;
    height: 100vh;
    flex-direction: column;
    overflow-y: auto;
    bottom: -100%;
    left: 0px;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 850px) and (min-width: 320px) {
    width: 100%;
    height: 1000px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ExperienceContent = styled.div`
  width: 90%;
  height: 60%;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  justify-content: flex-start;
  align-items: flex-end;
  @media (max-width: 850px) and (min-width: 320px) {
    width: 100%;
    height: 800px;
    justify-content: space-evenly;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 1rem;
  height: 70%;
  @media (max-width: 1300px) and (min-width: 320px) {
    width: 100%;
    margin-left: 10px;
    height: 200px;
    justify-content: flex-end;
  }
`;

export const ProjectsTitle = styled.h1`
  color: #333333;
  font-size: 3rem;
  text-shadow: 1px 1px 1px #282322;
  @media (max-width: 850px) and (min-width: 320px) {
    font-size: 25px;
  }
`;

export const ProjectsSpan = styled.h2`
  color: #d71e47;
  font-size: 2rem;
  text-shadow: 1px 1px 2px #000;
  @media (max-width: 850px) and (min-width: 320px) {
    font-size: 16px;
    text-shadow: none;
  }
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  box-shadow: 1px 1px 5px 1px #000;
  border-radius: 30px;
  align-items: center;
  transition: 0.3s ease;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 850px) and (min-width: 320px) {
    height: 180px;
    overflow-y: auto;
    padding-top: 0;
    border-radius: 10px;
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  @media (max-width: 850px) and (min-width: 320px) {
    width: 100%;
    text-align: justify;
  }
`;

export const ExperienceImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 9999em;
  background-color: ${(props) => (props.color ? props.color : "#000")};
  align-items: center;
  display: flex;
  margin-right: 20px;
  padding: 5px;
  box-shadow: 1px 1px 9px 1px #000;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const ProjH3 = styled.h3`
  color: #2b2929;
  margin-bottom: 3px;
`;

export const ProjSpan = styled.span`
  color: #d71e47;
  font-weight: 700;
`;

export const ExpNameWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const CompanyName = styled.span`
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 850px) and (min-width: 320px) {
    font-size: 1rem;
  }
`;

export const CompanyJob = styled.span`
  color: var(--primary);
  font-size: 1rem;
  @media (max-width: 850px) and (min-width: 320px) {
    font-size: 0.75rem;
  }
`;

export const CompanyData = styled.span`
  color: #d71e47;
  font-weight: 700;
  align-self: flex-end;
  @media (max-width: 850px) and (min-width: 320px) {
    font-size: 0.75rem;
  }
`;

export const CompanyNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyJobWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExperienceLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  text-decoration: none;
  color: var(--primary);
`;

export const ProjsParagraph = styled.p`
  color: #2b2929;
  opacity: 0.8;
  @media (max-width: 850px) and (min-width: 320px) {
    font-size: 12px;
    padding: 0 0 1rem 0;
  }
`;

const PAnimation = keyframes`
0% {width: 5%;}
100% {width: 60%;}
`;

export const PAnimated = styled.p<{ panimation: boolean | undefined }>`
  width: 50%;
  border: 1px solid #d71e47;
  margin-top: 15px;
  position: absolute;
  left: 0;
  animation-name: ${(props) =>
    props.panimation !== undefined && (props.panimation ? PAnimation : "")};
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
`;

export const ButtonWrapper = styled.div`
  width: 290px;
  justify-content: space-around;
  display: flex;
  position: absolute;
  top: 30px;
  right: 100px;

  @media (max-width: 850px) and (min-width: 320px) {
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

export const ProjectButton = styled(Button)``;
