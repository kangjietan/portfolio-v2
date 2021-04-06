import React from "react";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/useSiteMetadata";
import GlobalStyle from "../../themes/GlobalStyle";
import { Nav } from "../index";
import { Container } from "./styles";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJs,
  faGithubSquare,
  faLinkedin,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkSquareAlt,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJs,
  faGithubSquare,
  faExternalLinkSquareAlt,
  faLinkedin,
  faAngellist,
  faFilePdf
);

/**
 * https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
 * https://www.gatsbyjs.com/docs/debugging-html-builds/
 */
const loadSmooth =
  typeof window !== "undefined"
    ? require("smooth-scroll")('a[href*="#"]')
    : null;

interface Props {
  children?: any;
}

const Layout: React.FunctionComponent = ({ children }: Props) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <GlobalStyle />
      <Nav />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
