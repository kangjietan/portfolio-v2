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
              <a href="https://github.com/kangjietan" target="_blank">
                <FontAwesomeIcon icon={["fab", "github-square"]} />
                <span>GitHub</span>
              </a>
            </SocialContainer>
            <SocialContainer>
              <a
                href="https://www.linkedin.com/in/kang-jie-tan-68356b177"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
                <span>LinkedIn</span>
              </a>
            </SocialContainer>
            <SocialContainer>
              <a href="https://angel.co/u/kang-jie-tan" target="_blank">
                <FontAwesomeIcon icon={["fab", "angellist"]} />
                <span>AngelList</span>
              </a>
            </SocialContainer>
          </SocialsContainer>
          <ResumeContainer>
            <a href="/Resume.pdf" target="_blank">
              <ResumeFileSVGContainer>
                <FontAwesomeIcon icon={["fas", "file-pdf"]} />
              </ResumeFileSVGContainer>
            </a>
            <a href="/Resume.pdf" target="_blank">
              <ViewResume>View Resume PDF</ViewResume>
            </a>
          </ResumeContainer>
        </SocialsResumeContainer>
        <ContentOverlay />
      </ContentContainer>
    </ContactSection>
  );
};

export default Contact;
