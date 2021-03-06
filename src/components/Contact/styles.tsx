import styled, { keyframes } from "styled-components";
import { Button } from "../../common/Button/styles";

const ContactAnimation = keyframes`
0% { left: 0px; bottom: -100%;}
100% {left: 0px; bottom: 0px;}
`;

const ContactAnimationBackWard = keyframes`
100% { left: 0px; bottom: -100%;}
0% {left: 0px; bottom: 0px;}
`;

export const ContactWrapper = styled.div<{ animate?: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: #111111;
  display: flex;
  position: absolute;
  left: 0px;
  bottom: -100%;
  z-index: 3001;
  align-items: center;
  animation-name: ${(props) =>
    props.animate !== undefined &&
    (props.animate ? ContactAnimation : ContactAnimationBackWard)};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  @media (max-width: 800px) and (min-width: 320px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 100%;
  @media (max-width: 800px) and (min-width: 320px) {
    align-items: center;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 500px;
  @media (max-width: 800px) and (min-width: 320px) {
    justify-content: center;
    height: 200px;
    width: 100%;
  }
`;

export const MainTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  text-shadow: 2px 2px 3px #000;
  @media (max-width: 800px) and (min-width: 320px) {
    font-size: 20px;
    text-align: center;
    margin-top: 80px;
  }
`;

export const MainTitleWrapper = styled.div``;

export const MainWrapper = styled.div`
  display: flex;
  @media (max-width: 800px) and (min-width: 320px) {
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 500px;
  align-items: center;
  @media (max-width: 800px) and (min-width: 320px) {
    height: 250px;
    width: 100%;
  }
`;

export const ContactsTitle = styled.h1`
  color: #fff;
  font-size: 30px;
  text-shadow: 2px 2px 3px #000;
  @media (max-width: 800px) and (min-width: 320px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const SocialMediasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-evenly;
  align-items: start;
  width: 400px;
  svg {
    cursor: pointer;
    font-size: 50px;
  }
  @media (max-width: 800px) and (min-width: 320px) {
    svg {
      font-size: 30px;
    }
    align-items: start;
    width: 300px;
    height: 150px;
  }
`;

export const SocialMedias = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  transition: 0.3s;
  &:hover:nth-child(1) {
    color: #014282;
  }
  &:hover:nth-child(2) {
    color: #c9510c;
  }
`;

export const ContactsInformation = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-evenly;
  @media (max-width: 800px) and (min-width: 320px) {
    height: 200px;
    justify-content: space-evenly;
  }
`;

export const InformationWrapper = styled.div<{ cursor?: string }>`
  display: flex;
  height: 70px;
  align-items: center;
  transition: 0.4s ease;
  svg {
    font-size: 50px;
    color: #fff;
    background-color: #d71e47;
    border-radius: 99em;
    padding: 10px;
    cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
    transition: 0.4s ease;
  }
  &:hover {
    svg {
      color: #d71e47;
      background-color: #fff;
    }
  }
  @media (max-width: 800px) and (min-width: 320px) {
    width: 100%;
    height: 100%;
    svg {
      font-size: 30px;
    }
  }
`;

export const Links = styled.a`
  font-size: 25px;
  text-decoration: none;
  color: #fff;
  margin-left: 13px;
  padding: 10px;
  @media (max-width: 800px) and (min-width: 320px) {
    font-size: 16px;
  }
`;

export const LinksSocialMedias = styled.a`
  font-size: 25px;
  text-decoration: none;
  color: #fff;
  margin-left: 13px;
  transition: 0.3s;
  padding: 10px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 800px) and (min-width: 320px) {
    margin-left: 0;
    font-size: 16px;
  }
`;

export const ContactSpans = styled.span<{ cursor?: string }>`
  font-size: 35px;
  color: #fff;
  margin-left: 13px;
  cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
  transition: ease 0.4s;
  @media (max-width: 800px) and (min-width: 320px) {
    font-size: 20px;
    margin-left: 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 800px) and (min-width: 320px) {
    justify-content: center;
  }
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
    justify-content: flex-end;
    align-items: center;
    right: 15px;
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
