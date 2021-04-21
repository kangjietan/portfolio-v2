import React from "react";
import styled from "styled-components";

// @ts-ignore
import Fade from "react-reveal/Fade";

const textColor = "#8C8C8C";

const EducationContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  max-width: 1320px;
  width: 100%;
  margin-top: 6rem;
  flex-direction: column;
`;

const EducationItem = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;

const EducationDescription = styled.div`
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

const EducationTime = styled.div`
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
  font-size: 1.1rem;

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
      <Fade>
        <h1>Education</h1>
      </Fade>
      <Fade>
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
            <p>2019 - 2020</p>
          </EducationTime>
        </EducationItem>
      </Fade>
      <Fade>
        <EducationItem>
          <EducationDescription>
            <h2>
              B.S., Technology and Information Management
              <span> - University of California, Santa Cruz</span>
            </h2>
            <EducationLocation>
              <p>Santa Cruz, California</p>
            </EducationLocation>
            <Fade>
              <EducationBullets>
                <p>Relevant Coursework:</p>
                {classes.map((item, idx) => (
                  <Bullet key={idx}>{item}</Bullet>
                ))}
              </EducationBullets>
            </Fade>
          </EducationDescription>
          <EducationTime>
            <p>2015 - 2019</p>
          </EducationTime>
        </EducationItem>
      </Fade>
    </EducationContainer>
  );
};

export default Education;
