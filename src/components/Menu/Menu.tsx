import React, { useState } from "react";
import {
  HamburgerButton,
  HamburgerContainer,
  ListContainer,
  MenuContainer,
} from "./styles";

const Menu: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <MenuContainer>
      <ListContainer open={menuOpen}></ListContainer>
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
