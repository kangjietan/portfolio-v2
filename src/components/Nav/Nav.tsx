import React, { useEffect } from "react";
import {
  Header,
  Navigation,
  LogoContainer,
  NavigationLinkContainer,
  NavigationLink,
} from "./styles";
import { animateLogoSVG } from "../../utils";

import { Menu } from "../index";

// @ts-ignore
import Fade from "react-reveal/Fade";

const NavLinks = [
  { section: "/#about", name: "About" },
  { section: "/#skills", name: "Skills" },
  { section: "/#projects", name: "Projects" },
  { section: "/#contact", name: "Contact" },
];

const Nav: React.FunctionComponent = () => {
  useEffect(() => {
    // Set the id of SVG, delay time in seconds to start animation and delay between each animation
    animateLogoSVG("logo", 0, 0.4);
    return () => {};
  }, []);

  return (
    <Header>
      <Navigation>
        <LogoContainer>
          <svg
            id="logo"
            width="135"
            height="65"
            viewBox="0 0 135 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H135V65H0V0Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M134 1H1V64H134V1ZM0 0V65H135V0H0Z"
              stroke="#03DAC6"
              strokeWidth="1"
            />
            <path
              d="M46.357 50L32.907 34.45V50H27.207V15.25H32.907V31.1L46.407 15.25H53.557L38.457 32.65L53.807 50H46.357Z"
              stroke="#03DAC6"
              strokeWidth="1"
            />
            <path
              d="M77.7977 15.25V40.3C77.7977 43.4 76.8477 45.85 74.9477 47.65C73.081 49.45 70.6143 50.35 67.5477 50.35C64.481 50.35 61.9977 49.45 60.0977 47.65C58.231 45.85 57.2977 43.4 57.2977 40.3H63.0477C63.081 41.8333 63.4643 43.05 64.1977 43.95C64.9643 44.85 66.081 45.3 67.5477 45.3C69.0143 45.3 70.131 44.85 70.8977 43.95C71.6643 43.0167 72.0477 41.8 72.0477 40.3V15.25H77.7977Z"
              stroke="#03DAC6"
              strokeWidth="1"
            />
            <path
              d="M109.52 15.25V19.9H100.27V50H94.5703V19.9H85.2703V15.25H109.52Z"
              stroke="#03DAC6"
              strokeWidth="1"
            />
          </svg>
        </LogoContainer>
        <Fade top>
          <NavigationLinkContainer>
            {NavLinks.map(({ section, name }) => {
              return (
                <NavigationLink key={section}>
                  <a href={section}>{name}</a>
                </NavigationLink>
              );
            })}
          </NavigationLinkContainer>
        </Fade>
        <Menu />
      </Navigation>
    </Header>
  );
};

export default Nav;
