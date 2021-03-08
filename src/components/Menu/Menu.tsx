import React, { useState } from "react";
import { HamburgerButton, HamburgerContainer, MenuContainer } from "./styles";

const Menu: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <MenuContainer>
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
