import React from "react";
import {
  ContentContainer,
  Heading,
  ProjectsContainer,
  ProjectsSection,
  SectionHeadingContainer,
} from "./styles";

// @ts-ignore
import Fade from "react-reveal/Fade";

const Projects: React.FunctionComponent = () => {
  return (
    <ProjectsSection>
      <Fade>
        <ContentContainer>
          <SectionHeadingContainer>
            <Heading>Projects</Heading>
          </SectionHeadingContainer>
          <ProjectsContainer>

          </ProjectsContainer>
        </ContentContainer>
      </Fade>
    </ProjectsSection>
  );
};

export default Projects;
