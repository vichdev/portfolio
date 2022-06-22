import React, { createContext, useContext, useState } from "react";
import { Portfolio } from "../models/portfolio";

const PortfolioContext = createContext<Portfolio>({} as Portfolio);

const Context: React.FC = ({ children }) => {
  const [about, setAbout] = useState<boolean>();
  const [project, setProject] = useState<boolean>();
  const [contact, setContact] = useState<boolean>();
  const [experience, setExperience] = useState<boolean>();

  return (
    <PortfolioContext.Provider
      value={{
        about,
        setAbout,
        project,
        setProject,
        contact,
        setContact,
        experience,
        setExperience,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

function usePortfolio() {
  const Context = useContext(PortfolioContext);

  if (!Context) {
    throw new Error("O hook usePortfolio deve ser usado como provider");
  }
  return Context;
}

export { Context, usePortfolio };
