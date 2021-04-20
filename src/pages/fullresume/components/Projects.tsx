import React from "react";

import styled from "styled-components";

import { ProjectNode } from "../../../components/sections/Projects/Projects";

import { useProjectData } from "../../../components/hooks";

export const ProjectContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  max-width: 1320px;
  width: 100%;
  margin-top: 2rem;
  flex-direction: column;
`;

export const ProjectItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const ProjectLinks = styled.div`
  display: flex;
`;

export const GitHubLink = styled.a``;

export const LiveSiteLink = styled.a`
  margin-right: 1rem;
`;

const excerpts = [
  "",
  "",
  "",
  "",
  "",
]

const Projects: React.FunctionComponent = () => {
  const projects = useProjectData();

  return (
    <ProjectContainer>
      {projects.map(({ node: project }: ProjectNode) => (
        <ProjectItem>
          <ProjectDescription>
            <h2>{project.frontmatter.title}</h2>
            <p></p>
          </ProjectDescription>
          <ProjectLinks>
            {project.frontmatter.site ? (
              <LiveSiteLink href={project.frontmatter.site} target="_blank">
                <p>Live Site</p>
              </LiveSiteLink>
            ) : null}
            <GitHubLink href={project.frontmatter.github} target="_blank">
              <p>GitHub</p>
            </GitHubLink>
          </ProjectLinks>
        </ProjectItem>
      ))}
    </ProjectContainer>
  );
};

export default Projects;
