import styled from "styled-components";
import { Button } from "../../common/Button/styles";

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right bottom,
    rgb(162, 0, 73),
    rgba(0, 0, 0, 0)
  );

  @media (max-width: 800px) and (min-width: 320px) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const LogoSpan = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 5px 5px 5px #000;
  margin-top: 5px;
  svg {
    width: 30px;
    height: 30px;
    color: #fff;
    text-shadow: 5px 5px 5px #000;
    margin-right: 5px;
  }
`;

export const LogoTitle = styled.h1`
  color: #fff;
  font-size: 50px;
  text-shadow: 3px 3px 3px black;
  @media (max-width: 800px) and (min-width: 320px) {
    font-size: 40px;
  }
`;

export const MainContent = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonMain = styled(Button)``;
