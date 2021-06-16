import React from "react";
import { Link } from "gatsby";
import { FileSystemNode } from "gatsby-source-filesystem";

import { useProjectData } from "../../hooks";

import {
  ContentContainer,
  Heading,
  ProjectsContainer,
  ProjectsSection,
  SectionHeadingContainer,
  ViewOtherWorkContainer,
} from "./styles";

import Project from "./Project/Project";

// @ts-ignore
import Fade from "react-reveal/Fade";

export interface Project {
  excerpt: string;
  frontmatter: {
    title: string;
    image: FileSystemNode;
    github: string;
    site: string | null;
    tech: string[];
  };
}

export interface ProjectNode {
  node: Project;
}

const Projects: React.FunctionComponent = () => {
  const projects = useProjectData();

  return (
    <ProjectsSection id="projects">
      <Fade left duration={2000}>
        <ContentContainer>
          <SectionHeadingContainer>
            <Heading>Projects</Heading>
          </SectionHeadingContainer>
          <ProjectsContainer>
            {projects.map(({ node: project }: ProjectNode, idx: number) => (
              <Project
                project={project}
                key={project.frontmatter.title}
                place={idx + 1}
              />
            ))}
          </ProjectsContainer>
          <ViewOtherWorkContainer>
            <Link to="/fullresume/#otherwork">View other projects</Link>
          </ViewOtherWorkContainer>
        </ContentContainer>
      </Fade>
    </ProjectsSection>
  );
};

export default Projects;
