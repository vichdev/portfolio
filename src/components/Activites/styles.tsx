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
  bottom: -100%;
  left: 0px;
  z-index: 3000;
  animation-name: ${(props) =>
    props.animate !== undefined &&
    (props.animate ? ActivityAnimation : ActivityAnimationBackWard)};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProjectsContent = styled.div`
  width: 800px;
  height: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
`;

export const ProjectsTitle = styled.h1`
  color: #333333;
  font-size: 75px;
  text-shadow: 1px 1px 1px #282322;
`;

export const ProjectsSpan = styled.h2`
  height: 60px;
  color: #d71e47;
  font-size: 35px;
  text-shadow: 1px 1px 2px #000;
`;

export const ProjWrapper = styled.div`
  display: flex;
  width: 700px;
  height: 130px;
  box-shadow: 1px 3px 10px 1px #000;
  border-radius: 30px;
  align-items: center;
  padding-left: 30px;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
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
`;

export const ProjsParagraph = styled.p`
  color: #2b2929;
  opacity: 0.8;
`;

const PAnimation = keyframes`
0% {width: 5%;}
100% {width: 45%;}
`;

export const PAnimated = styled.p<{ panimation: boolean | undefined }>`
  width: 45%;
  border: 1px solid #d71e47;
  margin-top: 5px;
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
