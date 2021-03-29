import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  AboutSection,
  Container,
  ContentContainer,
  Description,
  DescriptionContainer,
  Heading,
  ImgContainer,
  SectionHeadingContainer,
} from "./styles";

// @ts-ignore
import Fade from "react-reveal/Fade";

const About: React.FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const image = getImage(data.file)!;

  return (
    <AboutSection id="about">
      <Fade left duration={2000}>
        <ContentContainer>
          <SectionHeadingContainer>
            <Heading>About</Heading>
          </SectionHeadingContainer>
          <Container>
            <ImgContainer>
              <GatsbyImage image={image} alt="profile" />
            </ImgContainer>
            <DescriptionContainer>
              <Description>
                I am a software engineer who has a passion for technology.
                Whether it be hardware or software, the process of learning new
                technologies and has always been exciting to me.
              </Description>
            </DescriptionContainer>
          </Container>
        </ContentContainer>
      </Fade>
    </AboutSection>
  );
};

export default About;
