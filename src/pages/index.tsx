import React from "react";
import { Layout, Hero } from "../components";

import styled from "styled-components";

const MainContainer = styled.main``;

const Index = () => {
  return (
    <Layout>
      <MainContainer>
        <Hero />
      </MainContainer>
    </Layout>
  );
};

export default Index;
