import React from "react";
import GlobalStyle from "../../themes/GlobalStyle";
import { Nav } from "../index";

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
};

export default Layout;
