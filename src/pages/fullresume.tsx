import React, { useEffect, useState } from "react";
import GlobalStyle from "../themes/GlobalStyle";

import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  AboutContainer,
  AboutMeContainer,
  BackHomeContainer,
  Container,
  EducationContainer,
  Experience,
  ExperienceContainer,
  ImageContainer,
  ParallaxContainer,
} from "../styles/fullresumepage";

// @ts-ignore
import Fade from "react-reveal/Fade";

const FullResume: React.FunctionComponent = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile2.jpeg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const image = getImage(data.file)!;

  return (
    <>
      <GlobalStyle />
      <BackHomeContainer>
        <Link to="/">&larr; Back to portfolio</Link>
      </BackHomeContainer>
      <Container>
        <AboutContainer>
          <ParallaxContainer pageOffset={offsetY} direction="up" limit={0}>
            <ImageContainer>
              <GatsbyImage image={image} alt="profile image" />
            </ImageContainer>
          </ParallaxContainer>
          <AboutMeContainer>
            <h1>My Journey</h1>
            <p>
              Growing up, I became very interested in technology because I loved
              to play games. It naturally grew my interest in computers. I was
              fascinated by how much you could do with them. I wanted to work in
              the technology industry but wasn’t too sure of all the available
              options.
            </p>
            <p>
              My education solidified my background in technology. I joined the
              Academy of Engineering in high school, where I soldered and made
              models with Autodesk Inventor. College was when I first got my
              introduction to programming. Taking the programming courses for my
              major helped me build a solid foundation in computer
              science/engineering. I discovered web development through one of
              my TIM classes (Business Strategy & Information Systems), and ever
              since then, I explored the field of software engineering. After
              graduation, I wanted to learn as much as I could in a short
              period, which led me to attend Hack Reactor.
            </p>
            <p>
              As of now, I’m continuing to learn, working on projects, and
              looking for the right opportunity where I can build and learn
              continuously with my passion for technology.
            </p>
          </AboutMeContainer>
        </AboutContainer>
        <ExperienceContainer>
          <h1>Experience</h1>
          <Experience>
            <h2>Summer Camp Leader</h2>
          </Experience>
        </ExperienceContainer>
        <EducationContainer>
          <h1>Education</h1>
        </EducationContainer>
      </Container>
    </>
  );
};

export default FullResume;
