import React from "react";
import * as Styles from "./styles";
import { FiXCircle } from "react-icons/fi";

const Error: React.FC = () => {
  return (
    <Styles.ErrorWrapper>
      <Styles.ErrorContainer>
        <FiXCircle />
        <Styles.ErrorMessage>
          Ainda não há nada por aqui. :&#40;
        </Styles.ErrorMessage>
      </Styles.ErrorContainer>
    </Styles.ErrorWrapper>
  );
};

export default Error;
