import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FileSystemNode } from "gatsby-source-filesystem";

import {
  ContentContainer,
  Heading,
  ImageContainer,
  ProjectContainer,
  ProjectsContainer,
  ProjectsSection,
  SectionHeadingContainer,
} from "./styles";

// @ts-ignore
import Fade from "react-reveal/Fade";

interface Project {
  excerpt: string;
  frontmatter: {
    title: string;
    image: FileSystemNode;
    github: string;
    site: string;
    tech: string[];
  };
}

interface ProjectNode {
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
            {projects.map(({ node: project }: ProjectNode) => {
              const { title, github, site, tech, image } = project.frontmatter;
              const projectImg = getImage(image)!;
              console.log(title, github, site, tech, projectImg);
              return (
                <ProjectContainer>
                  <ImageContainer>
                    <GatsbyImage image={projectImg} alt="project image" />
                  </ImageContainer>
                </ProjectContainer>
              );
            })}
          </ProjectsContainer>
        </ContentContainer>
      </Fade>
    </ProjectsSection>
  );
};

export default Projects;
