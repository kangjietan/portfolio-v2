import React from "react";

import styled from "styled-components";

import {
  ProjectNode,
  Project,
} from "../../../components/sections/Projects/Projects";

import { useProjectData } from "../../../components/hooks";

// @ts-ignore
import Fade from "react-reveal/Fade";

interface Node extends Project {
  technologies: string[];
  bullets: string[];
}

interface ResumeProject extends ProjectNode {
  node: Node;
}

const textColor = "#8C8C8C";

const ProjectContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  max-width: 1320px;
  width: 100%;
  margin-top: 2rem;
  flex-direction: column;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-left: 1rem;

  & h2 {
    font-weight: 400;
  }

  @media (max-width: 576px) {
    & h2 {
      margin-bottom: 0;
    }
  }
`;

const ProjectTitleLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
`;

const GitHubLink = styled.a``;

const LiveSiteLink = styled.a`
  margin-right: 1rem;
`;

const ProjectDescription = styled.div`
  color: ${textColor};
`;

const ProjectBullets = styled.div``;

const Bullet = styled.p`
  color: ${textColor};

  &::before {
    content: "-";
    margin-right: 0.25rem;
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${textColor};

  & p {
    margin: 0;
    margin-right: 1rem;
    opacity: 75%;
  }
`;

const excerpts = [
  "A MERN stack web application where you can have a restaurant randomly chosen for you based on your inputs for the term and location or browse for restaurants to add to a custom or favorites list that you can randomize from. The custom list is just for people who want to make a quick list of restaurants to be randomized. To save your favorites list, you need to be registered. Data about the businesses comes from the backend, where the server acts as a proxy that sends requests to the Yelp Fusion API.",
  "A MERN stack application to browse movies and manage your list of movies that you will watch or ones that you’ve watched already. Data about the movies comes from the backend, where the server acts as a proxy that sends requests to the TMDB API.",
  "A full-stack application where you can have a restaurant randomly chosen for you based on your inputs for the term and location. There is a selection of food/dish images you can click on to search the Yelp Fusion API.",
  "A group project where we took over another group's project Frontend Capstone and scaled the backend to handle production-level traffic. The goal was to scale up to 10k RPS in a 2-week time frame from choosing the database to seeding to testing to scaling. The process only involved horizontally scaling and no vertically scaling. Horizontally scaling was done with the AWS EC2 free tier instance (t2 micro).",
  "A group project where we worked together to make a mockup of SoundCloud. We divided the page into microservices, and each member was responsible for a microservice. I was responsible for the bottom audio player, where I implemented music functionality.",
];

const technologies = [
  [
    "React",
    "Redux",
    "React Router DOM",
    "Styled-components",
    "Express.js",
    "Passport.js",
    "MongoDB",
    "Yelp Fusion API",
  ],
  [
    "React",
    "Redux",
    "React Router DOM",
    "Styled-components",
    "Passport.js",
    "Express.js",
    "MongoDB",
  ],
  [
    "React",
    "CSS",
    "Express.js",
    "Yelp Fusion API",
    "Google Maps JavaScript API",
  ],
  [
    "Express.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Loader.io",
    "K6",
    "New Relic",
    "AWS EC2",
    "NGINX",
  ],
  [
    "React",
    "Styled-components",
    "Express.js",
    "MongoDB",
    "Docker",
    "AWS S3 & EC2",
  ],
];

const bullets = [
  [
    "Added user authentication with Passport.js and MongoDB and managed sessions with Express/Passport.",
    "Added functionality to randomize from lists managed by Redux and MongoDB.",
  ],
  [
    "Developed web application to display formatted movie information in a responsive UI from user queries",
    "Managed movie lists in application and TMDB API information using Redux and MongoDB.",
    "Authenticate users with Passport.js and MongoDB and established sessions with Express/Passport.",
    "Integrated TMDB API to retrieve movie information from user search results.",
  ],
  [
    "Developed web application to display formatted information in a responsive UI from user queries.",
    "Integrated google maps showcasing restaurants as markers using Google Maps API.",
    "Integrated Yelp API to retrieve restaurant information from user search results.",
  ],
  [
    "Optimized service to handle 2.2k RPS with latency less than 129ms and 0% error rate by horizontal scaling service to 5 servers on EC2 instances and implementing NGINX as a reverse proxy and load balancer.",
    "Deployed service in Docker container to make horizontally scaling the service seamless.",
    "Load tested the application with Loader.io and K6 and identified bottlenecks within the system.",
    "Implemented RESTful API to support CRUD operations.",
  ],
  [
    "Implemented music player functionality using React state management for HTML audio element/source.",
    "Developed RESTful API to render data retrieved from AWS S3.",
    "Applied styled components to reduce conflicts when deploying with other services.",
    "Deployed service and proxy server in docker containers through Amazon EC2 Instances.",
  ],
];

const Projects: React.FunctionComponent = () => {
  const projects = useProjectData().map(
    ({ node: project }: ResumeProject, idx: number) => ({
      node: {
        ...project,
        excerpt: excerpts[idx],
        technologies: technologies[idx],
        bullets: bullets[idx],
      },
    })
  );

  return (
    <ProjectContainer>
      <h1>Projects</h1>
      {projects.map(({ node: project }: ResumeProject, idx: number) => {
        return (
          <Fade key={idx}>
            <ProjectItem>
              <ProjectTitleLinks>
                <a
                  href={project.frontmatter.site || project.frontmatter.github}
                  target="_blank"
                >
                  <h2>{project.frontmatter.title}</h2>
                </a>
                <ProjectLinks>
                  {project.frontmatter.site ? (
                    <LiveSiteLink
                      href={project.frontmatter.site}
                      target="_blank"
                    >
                      <p>Live Site</p>
                    </LiveSiteLink>
                  ) : null}
                  <GitHubLink href={project.frontmatter.github} target="_blank">
                    <p>GitHub</p>
                  </GitHubLink>
                </ProjectLinks>
              </ProjectTitleLinks>
              <ProjectDescription>
                <p>{project.excerpt}</p>
              </ProjectDescription>
              <ProjectBullets>
                {project.bullets.map((bullet, idx) => (
                  <Bullet key={idx}>{bullet}</Bullet>
                ))}
              </ProjectBullets>
              <TechContainer>
                {project.technologies.map((tech, idx) => (
                  <p key={idx}>{tech}</p>
                ))}
              </TechContainer>
            </ProjectItem>
          </Fade>
        );
      })}
    </ProjectContainer>
  );
};

export default Projects;
