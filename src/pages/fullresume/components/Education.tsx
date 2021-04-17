import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import styled from "styled-components";

const textColor = "#8C8C8C";

const EducationContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  width: 1320px;
  margin-top: 2rem;
  flex-direction: column;
`;

const EducationItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EducationDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 150px);

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

const EducationTime = styled.div`
  font-size: 1.5rem;
  color: ${textColor};
  width: 150px;
  margin-top: 1rem;

  & > * {
    margin: 0;
  }
`;

const EducationLocation = styled.div`
  margin-left: 1rem;
  font-size: 1.25rem;

  & > p {
    color: ${textColor};
    margin: 0;
  }
`;

const EducationBullets = styled.div`
  margin-left: 1rem;

  & > p {
    color: ${textColor};
  }
`;

export const Bullet = styled.p`
  color: ${textColor};

  &::before {
    content: "-";
    margin-right: 0.25rem;
  }
`;

const classes = [
  "TIM 50: Business Information Systems",
  "TIM 158: Business Strategy & Information Systems",
  "AMS 147: Computational Methods and Applications",
  "CMPE 12/L: Computer Systems & Assembly Language",
  "CMPS 12B/M: Data Structures",
  "CMPE 16: Applied Discrete Mathematics",
  "CMPS 11: Intermediate Programming: Java",
  "CMPE 150/L: Introduction to Computer Networks",
  "CMPS 182: Introduction to Database Management Systems",
  "CMPS 5J: Introduction to Programming: Java",
];

const Education = () => {
  return (
    <EducationContainer>
      <h1>Education</h1>
      <EducationItem>
        <EducationDescription>
          <h2>
            Software Engineering Immersive<span> - Hack Reactor</span>
          </h2>
          <EducationLocation>
            <p>San Francisco, California</p>
          </EducationLocation>
          <EducationBullets>
            <Bullet>Full Stack JavaScript web development bootcamp.</Bullet>
          </EducationBullets>
        </EducationDescription>
        <EducationTime>
          <p>2019-2020</p>
        </EducationTime>
      </EducationItem>
      <EducationItem>
        <EducationDescription>
          <h2>
            B.S., Technology and Information Management
            <span> - University of California, Santa Cruz</span>
          </h2>
          <EducationLocation>
            <p>Santa Cruz, California</p>
          </EducationLocation>
          <EducationBullets>
            <p>Relevant Coursework:</p>
            {classes.map((item) => (
              <Bullet>{item}</Bullet>
            ))}
          </EducationBullets>
        </EducationDescription>
        <EducationTime>
          <p>2015-2019</p>
        </EducationTime>
      </EducationItem>
    </EducationContainer>
  );
};

export default Education;
