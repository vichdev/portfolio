import React from "react";
import * as Styles from "./styles";
import { IoLogoLinkedin, IoLogoGithub, IoMdMail } from "react-icons/io";
import {
  BsTelephoneFill,
  BsFillFileEarmarkArrowDownFill,
} from "react-icons/bs";
import curriculo from "../../assets/Curriculo_Victor_2023_ptBR.pdf";
import { FaAngleLeft } from "react-icons/fa";
import { usePortfolio } from "../../context/Context";

const Contact: React.FC = () => {
  const { contact, setContact } = usePortfolio();

  return (
    <Styles.ContactWrapper animate={contact}>
      <Styles.ButtonWrapper>
        <Styles.BackButton onClick={() => setContact(!contact)}>
          <FaAngleLeft />
          Voltar
        </Styles.BackButton>
      </Styles.ButtonWrapper>
      <Styles.ContactContainer>
        <Styles.MainTitleWrapper>
          <Styles.MainTitle>Muito obrigado pela visita! :).</Styles.MainTitle>
        </Styles.MainTitleWrapper>
        <Styles.MainWrapper>
          <Styles.ContactContent>
            <Styles.TitleWrapper>
              <Styles.ContactsTitle>Redes Sociais</Styles.ContactsTitle>
            </Styles.TitleWrapper>
            <Styles.SocialMediasWrapper>
              <Styles.SocialMedias>
                <IoLogoLinkedin />
                <Styles.LinksSocialMedias
                  href={"https://www.linkedin.com/in/vichdev/"}
                >
                  LinkedIn
                </Styles.LinksSocialMedias>
              </Styles.SocialMedias>
              <Styles.SocialMedias>
                <IoLogoGithub />
                <Styles.LinksSocialMedias href={"https://github.com/vichdev"}>
                  Github
                </Styles.LinksSocialMedias>
              </Styles.SocialMedias>
            </Styles.SocialMediasWrapper>
          </Styles.ContactContent>
          <Styles.Contacts>
            <Styles.TitleWrapper>
              <Styles.ContactsTitle>Contatos</Styles.ContactsTitle>
            </Styles.TitleWrapper>
            <Styles.ContactsInformation>
              <Styles.InformationWrapper cursor={"default"}>
                <BsTelephoneFill />
                <Styles.Links>(79) 9 9942-1414</Styles.Links>
              </Styles.InformationWrapper>
              <Styles.InformationWrapper>
                <IoMdMail />
                <Styles.Links
                  href={
                    "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrzhkvCJMdzLsPLSQfqvzVdTHVQmMhslVjWPDjRvpQLNjZJtGnPPxJsFFDSTjVPkxVljr"
                  }
                >
                  victor.hugo.antunes.n@gmail.com
                </Styles.Links>
              </Styles.InformationWrapper>
              <Styles.InformationWrapper>
                <BsFillFileEarmarkArrowDownFill />
                <Styles.Links href={curriculo} download={"CV_VICTOR_PT_BR.pdf"}>
                  Currículo
                </Styles.Links>
              </Styles.InformationWrapper>
            </Styles.ContactsInformation>
          </Styles.Contacts>
        </Styles.MainWrapper>
      </Styles.ContactContainer>
    </Styles.ContactWrapper>
  );
};

export default Contact;
