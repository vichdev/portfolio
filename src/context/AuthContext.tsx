import React, { createContext, useContext, useState } from "react";
import { Portfolio } from "../models/portfolio";

const AuthContext = createContext<Portfolio>({} as Portfolio);

const Context: React.FC = ({ children }) => {
  const [about, setAbout] = useState<boolean>();
  const [project, setProject] = useState<boolean>();
  const [contact, setContact] = useState<boolean>();

  return (
    <AuthContext.Provider
      value={{
        about,
        setAbout,
        project,
        setProject,
        contact,
        setContact,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function usePortfolio() {
  const Context = useContext(AuthContext);

  if (!Context) {
    throw new Error("O hook usePortfolio deve ser usado como provider");
  }
  return Context;
}

export { Context, usePortfolio };
