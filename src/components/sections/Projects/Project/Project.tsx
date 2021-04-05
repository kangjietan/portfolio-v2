import React from "react";
import {
  ExcerptContainer,
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
  const { excerpt } = project;
  const projectImg = getImage(image)!;

  return (
    <ProjectContainer place={place}>
      <ImageContainer place={place}>
        <a href={site || github} target="_blank">
          <GatsbyImage image={projectImg} alt="project image" />
        </a>
      </ImageContainer>
      <ProjectInformationContainer place={place}>
        <LinksContainer place={place}>
          <GitHubLink href={github} target="_blank">
            <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
          </GitHubLink>
          {site !== null ? (
            <LiveSiteLink href={site} target="_blank">
              <FontAwesomeIcon
                icon={["fas", "external-link-square-alt"]}
                size="2x"
              />
            </LiveSiteLink>
          ) : null}
        </LinksContainer>
        <a href={site || github} target="_blank">
          <ProjectTitle>{title}</ProjectTitle>
        </a>
        <ExcerptContainer>{excerpt}</ExcerptContainer>
        <TechContainer place={place}>
          {tech.map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </TechContainer>
      </ProjectInformationContainer>
      <ProjectOverlay />
    </ProjectContainer>
  );
};

export default Project;
