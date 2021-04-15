import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  AboutSection,
  Container,
  ContentContainer,
  Description,
  DescriptionContainer,
  Heading,
  ImgContainer,
  ReadMoreContainer,
  SectionHeadingContainer,
} from "./styles";

// @ts-ignore
import Fade from "react-reveal/Fade";

type NavigationText = "Read More" | "Full Resume";

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

  const [navigationText, setNavigationText] = useState<NavigationText>(
    "Read More"
  );

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
                technologies has always been exciting to me.
              </Description>
              <ReadMoreContainer
                onMouseEnter={() => setNavigationText("Full Resume")}
                onMouseLeave={() => setNavigationText("Read More")}
              >
                <Link to="/fullresume">{navigationText} &rarr;</Link>
              </ReadMoreContainer>
            </DescriptionContainer>
          </Container>
        </ContentContainer>
      </Fade>
    </AboutSection>
  );
};

export default About;
