import React from "react";

import styled from "styled-components";

const textColor = "#8C8C8C";

// EXPERIENCE //
export const ExperienceContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  width: 900px;
  margin-top: 2rem;
  flex-direction: column;
`;

export const ExperienceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExperienceDescription = styled.div`
  & > * {
    margin: 1rem;
  }

  & h2 {
    font-weight: 400;
  }

  & span {
    color: ${textColor};
  }
`;

export const ExperienceTime = styled.div`
  font-size: 1.5rem;
  color: ${textColor};

  & > * {
    margin: 1rem;
  }
`;

export const ExperienceLocation = styled.div`
  margin-left: 1rem;
  font-size: 1.25rem;
  & > p {
    color: ${textColor};
    margin: 0;
  }
`;

export const ExperienceBullets = styled.div``;
// EXPERIENCE //

export const EducationContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  width: 1024px;
  margin-top: 2rem;
  flex-direction: column;
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
        </ExperienceDescription>
        <ExperienceTime>
          <p>2014</p>
        </ExperienceTime>
      </ExperienceItem>
      <ExperienceLocation>
        <p>San Francisco, California</p>
      </ExperienceLocation>
    </ExperienceContainer>
  );
};

export default Experience;
