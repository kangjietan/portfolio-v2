import React from "react";

import { Gatsby, Redux, Typescript } from "./index";

const SkillSVG = (icon: string) => {
  switch (icon) {
    case "gatsby":
      return <Gatsby />;
    case "redux":
      return <Redux />;
    case "typescript":
      return <Typescript />;
    default:
      return null;
  }
};

export default SkillSVG;
