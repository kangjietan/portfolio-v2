import React from "react";
import { ImageContainer, ProjectContainer } from "./styles";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Project as ProjectInterface } from "../Projects";

interface Props {
  project: ProjectInterface;
}

const Project: React.FunctionComponent<Props> = ({ project }) => {
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
};

export default Project;
