import React from "react";
import { Layout, Hero, About } from "../components";

import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 0px 150px;

  @media (max-width: 768px) {
    padding: 0px 100px;
  }

  @media (max-width: 700px) {
    padding: 0px 50px;
  }
`;

const Index: React.FunctionComponent = () => {
  return (
    <Layout>
      <MainContainer>
        <Hero />
        <About />
      </MainContainer>
    </Layout>
  );
};

export default Index;
