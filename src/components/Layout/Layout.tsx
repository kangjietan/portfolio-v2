import React from "react";
import GlobalStyle from "../../themes/GlobalStyle";
import { Nav } from "../index";
import { Container } from "./styles";

interface Props {
  children?: any;
}

const Layout: React.FunctionComponent = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
