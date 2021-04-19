import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../themes/GlobalStyle";

import { Link } from "gatsby";

import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";

// @ts-ignore
import Fade from "react-reveal/Fade";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 150px;

  @media (max-width: 1200px) {
    padding: 0px 100px;
  }

  @media (max-width: 992px) {
    padding: 0px 75px;
  }

  @media (max-width: 768px) {
    padding: 0px 50px;
  }

  @media (max-width: 576px) {
    padding: 0px 25px;
  }
`;

const BackHomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  cursor: pointer;
  font-size: 1.25rem;
  text-decoration: underline;
`;

const FullResume: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <BackHomeContainer>
        <Link to="/">&larr; Back to portfolio</Link>
      </BackHomeContainer>
      <Container>
        <About />
        <Experience />
        <Education />
      </Container>
    </>
  );
};

export default FullResume;
