import React from "react";
import GlobalStyle from "../../themes/GlobalStyle";
import { Nav } from "../index";
import { Container } from "./styles";
import * as SmoothScroll from "smooth-scroll";

/**
 * ttps://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
 */
if (typeof window !== "undefined") {
  new SmoothScroll('a[href*="#"]');
}

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
