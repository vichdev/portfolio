import styled from "styled-components";

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 9999em;
  background-color: #fff;
  border: none;
  box-shadow: 1px 1px 5px black;
  transition: ease 0.4s;
  font-weight: 700;
  padding: 5px;
  align-items: center;

  &:hover {
    background-color: #d71e47;
    color: #fff;
    top: -1px;
    position: relative;
  }
`;
