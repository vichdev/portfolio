import styled, { keyframes } from "styled-components";
import { Button } from "../../common/Button/styles";

const AboutAnimation = keyframes`
0% { top: 0px; right: -100%;}
100% {top: 0px; right: 0px;}
`;

const AboutAnimationBackWard = keyframes`
100% { top: 0px; right: -100%;}
0% {top: 0px; right: 0px;}
`;

export const AboutWrapper = styled.div<{
  animation?: boolean;
}>`
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  background-color: #111111;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  z-index: 2999;
  padding: 3rem;
  position: absolute;
  top: 0px;
  right: -100%;
  animation-name: ${(props) =>
    props.animation !== undefined &&
    (props.animation ? AboutAnimation : AboutAnimationBackWard)};
  animation-duration: 1.7s;
  animation-fill-mode: forwards;
  @media (max-width: 1400px) and (min-width: 320px) {
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1400px) and (min-width: 320px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
  @media (max-width: 1400px) and (min-width: 320px) {
    height: 100%;
    display: flex;
    text-align: justify;
    max-width: 100%;
    align-items: center;
    p {
      align-self: flex-start;
    }
  }
`;

export const AboutImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 99rem;
`;

export const AboutImgWrapper = styled.div`
  width: 30rem;
  height: 30rem;

  border-radius: 99rem;
  box-shadow: 2px 3px 5px #000;
  @media (max-width: 500px) {
    margin-top: 15rem;
    width: 15rem;
    height: 15rem;
  }
  @media (max-width: 1400px) and (min-width: 500px) {
    margin-top: 5rem;
    width: 15rem;
    height: 15rem;
  }
`;

export const AboutTitle = styled.h1`
  color: #fff;
  font-size: 75px;
  text-shadow: 5px 5px 5px #000;
  @media (max-width: 1400px) and (min-width: 320px) {
    font-size: 30px;
  }
`;

export const AboutH2 = styled.h2`
  height: 60px;
  color: #d71e47;
  font-size: 35px;
  margin-bottom: 25px;
  border-bottom: 1px solid #fff;
  text-shadow: 1px 1px 5px #000;
  @media (max-width: 1400px) and (min-width: 320px) {
    font-size: 20px;
    border-bottom: none;
    height: 0;
    margin-bottom: 40px;
  }
`;

export const AboutParagraph = styled.p`
  color: rgb(136, 136, 136);
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
  @media (max-width: 1400px) and (min-width: 320px) {
    font-size: 12px;
    text-align: justify;
    margin-bottom: 10px;
  }
`;

export const AboutSpan = styled.span`
  color: #d71e47;
  font-weight: 800;
`;

export const TechnologiesWrappper = styled.div<{ color: string }>`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 1rem;
  flex-wrap: wrap;
  svg {
    font-size: 35px;
    color: ${(props) => (props.color ? props.color : "#FFF")};
  }
  @media (max-width: 1400px) and (min-width: 320px) {
    width: 100%;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: center;
    svg {
      margin-right: 0;
    }
  }
  @media (max-width: 500px) and (min-width: 320px) {
    justify-content: flex-start;
  }
`;

export const ButtonWrapper = styled.div`
  width: 290px;
  justify-content: space-around;
  display: flex;
  position: absolute;
  top: 30px;
  right: 100px;
  @media (max-width: 600px) and (min-width: 320px) {
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

export const ButtonExperience = styled(Button)``;
