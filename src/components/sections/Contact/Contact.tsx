import React from "react";
import {
  ContactSection,
  ContentContainer,
  ContentOverlay,
  Heading,
  ResumeContainer,
  ResumeFileSVGContainer,
  SectionHeadingContainer,
  SocialContainer,
  SocialsContainer,
  SocialsResumeContainer,
  TextContainer,
  ViewResume,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// @ts-ignore
import Fade from "react-reveal/Fade";

const Contact: React.FunctionComponent = () => {
  return (
    <ContactSection id="contact">
      <SectionHeadingContainer>
        <Heading>Contact</Heading>
      </SectionHeadingContainer>
      <ContentContainer>
        <TextContainer>Get In Touch</TextContainer>
        <SocialsResumeContainer>
          <SocialsContainer>
            <SocialContainer>
              <FontAwesomeIcon icon={["fab", "github-square"]} />
              <span>GitHub</span>
            </SocialContainer>
            <SocialContainer>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
              <span>LinkedIn</span>
            </SocialContainer>
            <SocialContainer>
              <FontAwesomeIcon icon={["fab", "angellist"]} />
              <span>AngelList</span>
            </SocialContainer>
          </SocialsContainer>
          <ResumeContainer>
            <ResumeFileSVGContainer>
              <FontAwesomeIcon icon={["fas", "file-pdf"]} />
            </ResumeFileSVGContainer>
            <ViewResume>View Resume</ViewResume>
          </ResumeContainer>
        </SocialsResumeContainer>
        <ContentOverlay />
      </ContentContainer>
    </ContactSection>
  );
};

export default Contact;
