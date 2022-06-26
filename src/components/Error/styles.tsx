import styled from "styled-components";

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50%;
  svg {
    color: #fff;
    font-size: 10rem;
  }
`;

export const ErrorMessage = styled.h1`
  color: #fff;
`;
