import React from "react";
import {
  GitHubLink,
  ImageContainer,
  LinksContainer,
  LiveSiteLink,
  ProjectContainer,
  ProjectInformationContainer,
  ProjectOverlay,
  ProjectTitle,
  TechContainer,
} from "./styles";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Project as ProjectInterface } from "../Projects";

interface Props {
  project: ProjectInterface;
  place: number;
}

const Project: React.FunctionComponent<Props> = ({ project, place }) => {
  const { title, github, site, tech, image } = project.frontmatter;
  const projectImg = getImage(image)!;
  console.log(place, title, github, site, tech, projectImg);
  console.log(place % 2 === 0 ? 2 : 1);
  return (
    <ProjectContainer place={place}>
      <ImageContainer place={place}>
        <GatsbyImage image={projectImg} alt="project image" />
      </ImageContainer>
      <ProjectInformationContainer place={place}>
        <LinksContainer place={place}>
          <GitHubLink>
            <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
            <a href={github} target="_blank" rel="noopener noreferrer"></a>
          </GitHubLink>
          <LiveSiteLink>
            <FontAwesomeIcon
              icon={["fas", "external-link-square-alt"]}
              size="2x"
            />
            <a href={site} target="_blank" rel="noopener noreferrer"></a>
          </LiveSiteLink>
        </LinksContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <TechContainer>
          {tech.map((skill) => (
            <div>{skill}</div>
          ))}
        </TechContainer>
      </ProjectInformationContainer>
      <ProjectOverlay />
    </ProjectContainer>
  );
};

export default Project;
