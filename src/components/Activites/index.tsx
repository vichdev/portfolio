import React, { useState } from "react";
import * as Styles from "./styles";
import { SiReact, SiJavascript, SiVuedotjs, SiNodedotjs } from "react-icons/si";
import { FaAngleLeft } from "react-icons/fa";
import { usePortfolio } from "../../context/Context";
import { projetos, Tecnologias } from "./data/projetos";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Theme, makeStyles } from "@material-ui/core";
import Error from "../Error";

interface IProjects {
  name: string;
  descricao: string;
  tecnologia: Tecnologias;
  img_path: string;
  cor?: string;
  observacao?: string;
  url: string;
}

const Activity: React.FC = () => {
  const {
    project,
    setProject,
    contact,
    setContact,
    experience,
    setExperience,
  } = usePortfolio();
  const [tabValue, setTabValue] = useState<number>(0);
  const [projectsArray, setProjectsArray] =
    useState<Array<IProjects>>(projetos);

  const useStyles = makeStyles((theme: Theme) => ({
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      color: theme.palette.text.secondary,
      display: "flex",
      flexDirection: "row",
      padding: "1.25rem",
      fontSize: "10rem",
      maxWidth: "100%",
    },
    tab: {
      color: "#fff",
      display: "flex",
      flexDirection: "row",
      fontSize: "1rem",
      "&.Mui-selected": {
        color: "#fff",
      },
    },
  }));

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  function TabPanel(props: {
    children?: React.ReactNode;
    index: number;
    value: number;
  }) {
    const { children, value, index, ...other } = props;
    const projetos = projectsArray.filter((item) => item.tecnologia === value);
    return (
      <>
        {value === index && (
          <Styles.SelectedProjectsWrapper
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
          >
            {projetos.length > 0 ? (
              projetos.map((item, index) => {
                return (
                  <Styles.ProjectLink
                    key={index}
                    href={item.url}
                    target="_blank"
                  >
                    <Styles.SelectedsProjectsContainer>
                      <Styles.TitleImgWrapper>
                        <Styles.SelectedProjectsImg
                          src={`${item.img_path}`}
                          color={item.cor}
                        />
                        <Styles.SelectedsProjectsTitle>
                          {item.name}
                        </Styles.SelectedsProjectsTitle>
                      </Styles.TitleImgWrapper>
                      <Styles.SelectedsProjectsDescription>
                        {item.descricao}
                      </Styles.SelectedsProjectsDescription>
                      {item.observacao ? (
                        <Styles.SelectedObservation>
                          {item.observacao}
                        </Styles.SelectedObservation>
                      ) : (
                        ""
                      )}
                    </Styles.SelectedsProjectsContainer>
                  </Styles.ProjectLink>
                );
              })
            ) : (
              <Error />
            )}
          </Styles.SelectedProjectsWrapper>
        )}
      </>
    );
  }

  return (
    <Styles.ProjectsWrapper animate={project}>
      <Styles.ButtonWrapper>
        <Styles.BackButton
          onClick={function () {
            setProject(!project);
            setExperience(!experience);
          }}
        >
          <FaAngleLeft />
          Voltar
        </Styles.BackButton>
        <Styles.ContactButton onClick={() => setContact(!contact)}>
          Contato
        </Styles.ContactButton>
      </Styles.ButtonWrapper>
      <Tabs
        key={tabValue}
        value={tabValue}
        onChange={handleChange}
        centered
        textColor={"primary"}
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="desktop"
        TabScrollButtonProps={{
          style: {
            color: "#FFF",
            fontSize: "40px",
          },
        }}
        className={classes.tabs}
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--red)",
            color: "var(--red)",
          },
        }}
      >
        <Tab
          className={classes.tab}
          label="React"
          icon={<SiReact color={"#04A5CF"} />}
        />
        <Tab
          className={classes.tab}
          label="React Native"
          icon={<SiReact color={"#04A5CF"} />}
        />
        <Tab
          className={classes.tab}
          label="Vue"
          icon={<SiVuedotjs color={"#42b883"} />}
        />
        <Tab
          className={classes.tab}
          label="NodeJS"
          icon={<SiNodedotjs color={"#94c745"} />}
        />
        <Tab
          className={classes.tab}
          label="Javascript"
          icon={<SiJavascript color={"#F7E018"} />}
        />
      </Tabs>
      <TabPanel value={tabValue} index={0}></TabPanel>
      <TabPanel value={tabValue} index={1}></TabPanel>
      <TabPanel value={tabValue} index={2}></TabPanel>
      <TabPanel value={tabValue} index={3}></TabPanel>
      <TabPanel value={tabValue} index={4}></TabPanel>
    </Styles.ProjectsWrapper>
  );
};

export default Activity;
