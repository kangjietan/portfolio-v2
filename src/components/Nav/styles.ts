import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100px;
  background-color: var(--bg-color);
  box-shadow: 0px 10px 10px 1px var(--on-primary-color);
`;

export const Navigation = styled.nav`
  position: relative;
  width: 100%;
  color: var(--on-bg);
  z-index: 11;
`;

export const LogoContainer = styled.div``;
