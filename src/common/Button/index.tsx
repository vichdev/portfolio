import React from "react";
import * as Styles from "./styles";
import { IPropsButton } from "./types";

const Button: React.FC<IPropsButton> = ({ text }) => {
  return <Styles.Button>{text}</Styles.Button>;
};

export default Button;
