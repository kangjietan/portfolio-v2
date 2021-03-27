import React from "react";
import GlobalStyle from "../../themes/GlobalStyle";
import { Nav } from "../index";
import { Container } from "./styles";
// import * as SmoothScroll from "smooth-scroll";

/**
 * https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
 * https://www.gatsbyjs.com/docs/debugging-html-builds/
 */
const loadSmooth = typeof window !== 'undefined' ? require("smooth-scroll")('a[href*="#"]') : null;

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
