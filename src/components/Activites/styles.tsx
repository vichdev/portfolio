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

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) and (min-width: 320px) {
    width: 100%;
    height: 1000px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProjectsContent = styled.div`
  width: 800px;
  height: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) and (min-width: 320px) {
    width: 100%;
    height: 800px;
    justify-content: space-evenly;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  @media (max-width: 800px) and (min-width: 320px) {
    width: 100%;
    margin-left: 10px;
    height: 200px;
    justify-content: flex-end;
  }
`;

export const ProjectsTitle = styled.h1`
  color: #333333;
  font-size: 75px;
  text-shadow: 1px 1px 1px #282322;
  @media (max-width: 800px) and (min-width: 320px) {
    font-size: 25px;
  }
`;

export const ProjectsSpan = styled.h2`
  height: 60px;
  color: #d71e47;
  font-size: 35px;
  text-shadow: 1px 1px 2px #000;
  @media (max-width: 800px) and (min-width: 320px) {
    font-size: 16px;
    text-shadow: none;
  }
`;

export const ProjWrapper = styled.div`
  display: flex;
  width: 700px;
  height: 130px;
  box-shadow: 1px 3px 10px 1px #000;
  border-radius: 30px;
  align-items: center;
  padding-left: 30px;
  @media (max-width: 800px) and (min-width: 320px) {
    width: 90%;
    height: 180px;
    padding: 30px;
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  @media (max-width: 800px) and (min-width: 320px) {
    width: 100%;
    text-align: justify;
  }
`;

export const ProjImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 9999em;
  background-color: ${(props) => (props.color ? props.color : "#000")};
  align-items: center;
  display: flex;
  margin-right: 20px;
  padding: 5px;
  box-shadow: 1px 1px 9px 1px #000;
`;

export const ProjH3 = styled.h3`
  color: #2b2929;
  margin-bottom: 3px;
`;

export const ProjSpan = styled.span`
  color: #d71e47;
  font-weight: 700;
  margin-bottom: 15px;
  @media (max-width: 800px) and (min-width: 320px) {
    margin-bottom: 5px;
  }
`;

export const ProjectLink = styled.a`
  color: #2b2929;
  font-size: 18px;
  margin-bottom: 3px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease;
  &:hover {
    color: #d71e47;
  }
  @media (max-width: 800px) and (min-width: 320px) {
    font-size: 15px;
  }
`;

export const ProjsParagraph = styled.p`
  color: #2b2929;
  opacity: 0.8;
  @media (max-width: 800px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

const PAnimation = keyframes`
0% {width: 5%;}
100% {width: 45%;}
`;

export const PAnimated = styled.p<{ panimation: boolean | undefined }>`
  width: 45%;
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
