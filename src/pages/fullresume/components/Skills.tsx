import React from "react";
import styled from "styled-components";

// @ts-ignore
import Fade from "react-reveal/Fade";

const SkillsContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  max-width: 1320px;
  flex-direction: column;
  width: 100%;
  margin: 6rem 0px 10rem 0px;
`;

const Container = styled.div`
  display: flex;
  z-index: 2;
  margin-top: 2rem;
  margin-left: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 1rem;
  width: 125px;
  height: 125px;
  text-align: center;
  margin-top: 1rem;
`;

const SkillOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 24%;
  border: 1px solid var(--on-bg);
  transition: border-radius 0.5s ease;

  &:hover {
    background-color: var(--on-bg);
    opacity: 10%;
    border-radius: 50%;
  }
`;

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Gatsby.js",
  "Redux.js",
  "Node.js",
  "Express.js",
  "HTML5",
  "CSS3",
  "MongoDB",
  "Git",
];

const Skills: React.FunctionComponent = () => {
  /**
   * https://codepen.io/rauldronca/pen/MZjEBd
   * Rotate towards mouse.
   */
  const handleHover = (e: MouseEvent) => {
    const sqrs = document.querySelectorAll(".item");

    const mouseX = e.pageX;
    const mouseY = e.pageY;

    sqrs.forEach((sqr: HTMLElement) => {
      const sqrX = sqr.offsetLeft + 20;
      const sqrY = sqr.offsetTop + 20;

      const diffX = mouseX - sqrX;
      const diffY = mouseY - sqrY;

      const radians = Math.atan2(diffY, diffX);

      const angle = (radians * 180) / Math.PI;

      sqr.style.transform = `rotate(${angle}deg)`;
    });
  };

  return (
    <SkillsContainer
      onMouseEnter={() => document.addEventListener("mousemove", handleHover)}
      onMouseLeave={() =>
        document.removeEventListener("mousemove", handleHover)
      }
    >
      <h1>Skills</h1>
      <Container>
        {skills.map((skill, idx) => (
          <Skill key={idx}>
            <p>{skill}</p>
            <SkillOverlay className="item" />
          </Skill>
        ))}
      </Container>
    </SkillsContainer>
  );
};

export default Skills;
