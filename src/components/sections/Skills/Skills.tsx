import React from "react";
import {
  ContentContainer,
  Heading,
  SectionHeadingContainer,
  SkillContainer,
  SkillName,
  SkillsContainer,
  SkillSection,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

import SkillSVG from "./svgs/SkillSVG";

// @ts-ignore
import Fade from "react-reveal/Fade";

const skillBrands = [
  { style: "fab", icon: "js", name: "JavaScript" },
  { style: "fab", icon: "react", name: "React" },
  { style: "fab", icon: "node-js", name: "Node.js" },
  { style: "fab", icon: "html5", name: "HTML5" },
  { style: "fab", icon: "css3-alt", name: "CSS3" },
];

const localSkillBrands = [
  { svg: "typescript", name: "TypeScript" },
  { svg: "gatsby", name: "Gatsby" },
  { svg: "redux", name: "Redux" },
];

const Skills: React.FunctionComponent = () => {
  const faSkills = skillBrands.map((skill) => {
    const { style, icon, name } = skill;
    const id = style + icon;
    return (
      <SkillContainer key={id}>
        <FontAwesomeIcon
          id={id}
          icon={[style as IconPrefix, icon as IconName]}
          color="var(--on-bg)"
        />
        <SkillName>{name}</SkillName>
      </SkillContainer>
    );
  });

  const localSkills = localSkillBrands.map((skill) => {
    const { svg, name } = skill;
    return (
      <SkillContainer key={svg}>
        {SkillSVG(svg)}
        <SkillName>{name}</SkillName>
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
