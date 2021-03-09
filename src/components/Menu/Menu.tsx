import React, { useState } from "react";
import {
  HamburgerButton,
  HamburgerContainer,
  ListContainer,
  MenuContainer,
  NavigationLinkContainer,
  NavigationLink
} from "./styles";

const NavLinks = [
  { section: "/#about", name: "About" },
  { section: "/#skills", name: "Skills" },
  { section: "/#projects", name: "Projects" },
  { section: "/#contact", name: "Contact" },
];

const Menu: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <MenuContainer>
      <ListContainer open={menuOpen}>
        <NavigationLinkContainer>
        {NavLinks.map(({ section, name }) => {
              return (
                <NavigationLink key={section}>
                  <a href={section}>{name}</a>
                </NavigationLink>
              );
            })}
        </NavigationLinkContainer>
      </ListContainer>
      <HamburgerContainer
        onClick={() => setMenuOpen(!menuOpen)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <HamburgerButton open={menuOpen} hover={hover} />
      </HamburgerContainer>
    </MenuContainer>
  );
};

export default Menu;
