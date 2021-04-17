import React from "react";

import styled from "styled-components";

const textColor = "#8C8C8C";

const ExperienceContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  width: 1320px;
  margin-top: 2rem;
  flex-direction: column;
`;

const ExperienceItem = styled.div`
  display: flex;
`;

const ExperienceDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 150px);

  & > * {
    margin-left: 1rem;
  }

  & h2 {
    font-weight: 400;
    width: calc(100% - 150px);
  }

  & span {
    color: ${textColor};
  }
`;

const ExperienceTime = styled.div`
  font-size: 1.5rem;
  color: ${textColor};
  width: 150px;
  margin-top: 1rem;

  & > * {
    margin: 0;
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

  &::before {
    content: "-";
    margin-right: 0.25rem;
  }
`;

const Experience: React.FunctionComponent = () => {
  return (
    <ExperienceContainer>
      <h1>Experience</h1>
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
              Planned and coordinated mostly outdoor activities along with other
              leaders for upcoming 8th graders.
            </Bullet>
            <Bullet>
              Supervised outdoor activities such as field trips, cookouts, etc.
            </Bullet>
          </ExperienceBullets>
        </ExperienceDescription>
        <ExperienceTime>
          <p>2014</p>
        </ExperienceTime>
      </ExperienceItem>
    </ExperienceContainer>
  );
};

export default Experience;
