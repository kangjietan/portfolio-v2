import React from "react";
import {
  ContentContainer,
  Heading,
  SectionHeadingContainer,
  SkillContainer,
  SkillName,
  SkillOverlay,
  SkillsContainer,
  SkillSection,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

import SkillSVG from "./svgs/SkillSVG";

// @ts-ignore
import Fade from "react-reveal/Fade";

const skillBrands = [
  { style: "fab", icon: "js", name: "JavaScript", color: "#f0db4f" },
  { style: "fab", icon: "react", name: "React", color: "#61DBFB" },
  { style: "fab", icon: "node-js", name: "Node.js", color: "#68A063" },
  { style: "fab", icon: "html5", name: "HTML5", color: "#f06529" },
  { style: "fab", icon: "css3-alt", name: "CSS3", color: "#264de4" },
];

const localSkillBrands = [
  { svg: "typescript", name: "TypeScript", color: "#007acc" },
  { svg: "gatsby", name: "Gatsby", color: "#663399" },
  { svg: "redux", name: "Redux", color: "#764abc" },
];

const Skills: React.FunctionComponent = () => {
  const faSkills = skillBrands.map((skill) => {
    const { style, icon, name, color } = skill;
    const id = style + icon;
    return (
      <SkillContainer key={id} color={color}>
        <FontAwesomeIcon
          id={id}
          icon={[style as IconPrefix, icon as IconName]}
          color="var(--on-bg)"
        />
        <SkillName>{name}</SkillName>
        <SkillOverlay />
      </SkillContainer>
    );
  });

  const localSkills = localSkillBrands.map((skill) => {
    const { svg, name, color } = skill;
    return (
      <SkillContainer key={svg} color={color}>
        {SkillSVG(svg)}
        <SkillName>{name}</SkillName>
        <SkillOverlay />
      </SkillContainer>
    );
  });

  const skills = [
    faSkills[0],
    localSkills[0],
    faSkills[1],
    localSkills[1],
    localSkills[2],
    ...faSkills.slice(2),
  ];

  return (
    <SkillSection>
      <Fade right duration={2000}>
        <ContentContainer>
          <SectionHeadingContainer>
            <Heading>Skills</Heading>
          </SectionHeadingContainer>
          <SkillsContainer>{skills}</SkillsContainer>
        </ContentContainer>
      </Fade>
    </SkillSection>
  );
};

export default Skills;
