import styled from "styled-components";
import { Button } from "../../common/Button/styles";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right bottom,
    rgb(162, 0, 73),
    rgba(0, 0, 0, 0)
  );
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  justify-content: space-evenly;
  svg {
    width: 150px;
    height: 150px;
    color: #fff;
    text-shadow: 5px 5px 5px #000;
    border-right: 2px solid white;
  }
`;

export const LogoContent = styled.div`
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const LogoSpan = styled.div`
  color: #fff;
  text-transform: uppercase;
  text-shadow: 5px 5px 5px #000;
  margin-top: 5px;
`;

export const LogoTitle = styled.h1`
  color: #fff;
  font-size: 50px;
  text-shadow: 3px 3px 3px black;
`;

export const MainContent = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonMain = styled(Button)``;
