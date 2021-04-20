import React, { useRef, useEffect, useState } from "react";

import { useOnClickOutside } from "../hooks";

import {
  HamburgerButton,
  HamburgerContainer,
  ListContainer,
  MenuContainer,
  NavigationLinkContainer,
  NavigationLink,
} from "./styles";

const NavLinks = [
  { section: "/#about", name: "About" },
  { section: "/#skills", name: "Skills" },
  { section: "/#projects", name: "Projects" },
  { section: "/#contact", name: "Contact" },
];

const Menu: React.FunctionComponent = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const onResize = (e: Event) => {
    const target = e.currentTarget as Window;
    if (target.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    document.documentElement.style.overflowY = menuOpen ? "hidden" : "visible";
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  useOnClickOutside(ref, () => setMenuOpen(false));

  const closeMenu = () => setMenuOpen(false);

  return (
    <MenuContainer ref={ref}>
      <ListContainer open={menuOpen}>
        <NavigationLinkContainer>
          {NavLinks.map(({ section, name }) => {
            return (
              <NavigationLink key={section} onClick={closeMenu}>
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
