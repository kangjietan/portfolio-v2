import React from "react";
import styled from "styled-components";

// @ts-ignore
import Fade from "react-reveal/Fade";

const textColor = "#8C8C8C";

const ExperienceContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  width: 100%;
  max-width: 1320px;
  margin-top: 6rem;
  flex-direction: column;
`;

const ExperienceItem = styled.div`
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;

const ExperienceDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;

  & > * {
    margin-left: 1rem;
  }

  & h2 {
    font-weight: 400;
  }

  & span {
    color: ${textColor};
  }
`;

const ExperienceTime = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: ${textColor};
  width: 150px;
  margin-top: 1rem;
  margin-left: 1rem;

  & > * {
    margin: 0;
  }

  @media (max-width: 1400px) {
    font-size: 1.25rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    margin-left: 0;
    font-size: 1.25rem;
    justify-content: flex-start;
  }
`;

const ExperienceLocation = styled.div`
  margin-left: 1rem;
  font-size: 1.25rem;

  & > p {
    color: ${textColor};
    margin: 0;
  }
`;

const ExperienceBullets = styled.div`
  margin-left: 1rem;
`;

export const Bullet = styled.p`
  color: ${textColor};
  font-size: 1.1rem;

  &::before {
    content: "-";
    margin-right: 0.25rem;
  }
`;

const Experience: React.FunctionComponent = () => {
  return (
    <ExperienceContainer>
      <Fade>
        <h1>Experience</h1>
      </Fade>
      <Fade>
        <ExperienceItem>
          <ExperienceDescription>
            <h2>
              Summer Camp Leader (Volunteering)<span> - Cameron House</span>
            </h2>
            <ExperienceLocation>
              <p>San Francisco, California</p>
            </ExperienceLocation>
            <ExperienceBullets>
              <Bullet>
                Planned and coordinated mostly outdoor activities along with
                other leaders for upcoming 8th graders.
              </Bullet>
              <Bullet>
                Supervised outdoor activities such as field trips, cookouts,
                etc.
              </Bullet>
            </ExperienceBullets>
          </ExperienceDescription>
          <ExperienceTime>
            <p>2014</p>
          </ExperienceTime>
        </ExperienceItem>
      </Fade>
    </ExperienceContainer>
  );
};

export default Experience;
