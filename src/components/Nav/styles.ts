import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100px;
  background-color: var(--bg-color);
  box-shadow: 0px 10px 10px 1px var(--on-primary-color);
  padding: 0px 50px;

  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--on-bg);
  z-index: 11;
  height: 100px;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
`;

export const NavigationLinkContainer = styled.ul`
  display: flex;
  margin-right: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavigationLink = styled.li`
  margin: 0 25px;
  font-size: 1.5rem;
  list-style: none;

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: var(--secondary-color);
  }
`;
