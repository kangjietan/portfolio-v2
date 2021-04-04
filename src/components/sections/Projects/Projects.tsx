import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FileSystemNode } from "gatsby-source-filesystem";

import {
  ContentContainer,
  Heading,
  ProjectsContainer,
  ProjectsSection,
  SectionHeadingContainer,
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
    site: string;
    tech: string[];
  };
}

export interface ProjectNode {
  node: Project;
}

const Projects: React.FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___place], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              github
              site
              tech
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);
  const projects = data.allMdx.edges;

  return (
    <ProjectsSection>
      <Fade>
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
        </ContentContainer>
      </Fade>
    </ProjectsSection>
  );
};

export default Projects;
