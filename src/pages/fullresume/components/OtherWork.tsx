import React from "react";
import styled from "styled-components";

// @ts-ignore
import Fade from "react-reveal/Fade";

const textColor = "#8C8C8C";

const OtherWorkContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  max-width: 1320px;
  width: 100%;
  margin-top: 6rem;
  flex-direction: column;
`;

const WorkItem = styled.div`
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

const WorkTitleLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const WorkLinks = styled.div`
  @media (max-width: 576px) {
    & p {
      margin-bottom: 0;
    }
  }
`;

const GitHubLink = styled.a``;

const WorkDescription = styled.div`
  color: ${textColor};
  font-size: 1.1rem;
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

const works = [
  {
    title: "Portfolio-v2",
    description:
      "Second iteration of my personal portfolio. This current website developed with Gatsby and TypeScript.",
    github: "https://github.com/kangjietan/portfolio-v2",
    tech: ["TypeScript", "Gatsby.js", "Styled-components", "MDX"],
  },
  {
    title: "Portfolio-v1",
    description: "My first portfolio developed with HTML5/CSS3 and Bootstrap.",
    github: "https://github.com/kangjietan/portfolio-v1",
    tech: ["HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Introduction",
    description:
      "Whenever I'm interested in a technology and want to learn it, I work on projects and keep track of them in this Github repository.",
    github: "https://github.com/kangjietan/introduction",
  },
  {
    title: "Leetcode",
    description: "Github repository of leetcode problems I've worked on.",
    github: "https://github.com/kangjietan/leetcode",
  },
];

const OtherWork: React.FunctionComponent = () => {
  return (
    <OtherWorkContainer>
      <Fade>
        <h1>Other Work</h1>
        {works.map((work, idx) => (
          <Fade key={idx}>
            <WorkItem>
              <WorkTitleLinks>
                <a href={work.github} target="_blank">
                  <h2>{work.title}</h2>
                </a>
                <WorkLinks>
                  <GitHubLink href={work.github} target="_blank">
                    <p>GitHub</p>
                  </GitHubLink>
                </WorkLinks>
              </WorkTitleLinks>
              <WorkDescription>
                <p>{work.description}</p>
              </WorkDescription>
              {work.tech ? (
                <TechContainer>
                  {work.tech.map((tech, idx) => (
                    <p key={idx}>{tech}</p>
                  ))}
                </TechContainer>
              ) : null}
            </WorkItem>
          </Fade>
        ))}
      </Fade>
    </OtherWorkContainer>
  );
};

export default OtherWork;
