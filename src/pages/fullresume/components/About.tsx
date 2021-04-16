import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const textColor = "#8C8C8C";

interface ParallaxProps {
  pageOffset: number;
  direction: string;
  limit: number;
}

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--on-bg);
  max-width: 1440px;
  margin-top: 10rem;

  & p {
    font-size: 1.1rem;
    color: ${textColor};
  }
`;

export const ParallaxContainer = styled.div`
  transform: ${(props: ParallaxProps) => {
    const { pageOffset } = props;
    if (pageOffset === 0) return "none";

    return `translateY(-${pageOffset * 0.5}px)`;
  }};
`;

export const ImageContainer = styled.div`
  width: 25rem;
  margin-right: 1rem;
`;

export const AboutMeContainer = styled.div`
  width: 50%;
`;

const About: React.FunctionComponent = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profile2.jpeg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const image = getImage(data.file)!;
  
  return (
    <AboutContainer>
      <ParallaxContainer pageOffset={offsetY} direction="up" limit={0}>
        <ImageContainer>
          <GatsbyImage image={image} alt="profile image" />
        </ImageContainer>
      </ParallaxContainer>
      <AboutMeContainer>
        <h1>My Journey</h1>
        <p>
          Growing up, I became very interested in technology because I loved to
          play games. It naturally grew my interest in computers. I was
          fascinated by how much you could do with them. I wanted to work in the
          technology industry but wasn’t too sure of all the available options.
        </p>
        <p>
          My education solidified my background in technology. I joined the
          Academy of Engineering in high school, where I soldered and made
          models with Autodesk Inventor. College was when I first got my
          introduction to programming. Taking the programming courses for my
          major helped me build a solid foundation in computer
          science/engineering. I discovered web development through one of my
          TIM classes (Business Strategy & Information Systems), and ever since
          then, I explored the field of software engineering. After graduation,
          I wanted to learn as much as I could in a short period, which led me
          to attend Hack Reactor.
        </p>
        <p>
          As of now, I’m continuing to learn, working on projects, and looking
          for the right opportunity where I can build and learn continuously
          with my passion for technology.
        </p>
      </AboutMeContainer>
    </AboutContainer>
  );
};

export default About;
