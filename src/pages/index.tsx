import React from "react";
import { Layout, Hero } from "../components";

import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Index: React.FunctionComponent = () => {
  return (
    <Layout>
      <MainContainer>
        <Hero />
      </MainContainer>
    </Layout>
  );
};

export default Index;
