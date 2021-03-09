import styled, { css } from "styled-components";

interface ButtonProps {
  open: boolean;
  hover: boolean;
}

interface ListProps {
  open: boolean;
}

export const MenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin-right: 10px;
`;

export const HamburgerButton = styled.div`
  width: 40px;
  height: 4px;
  background: ${(props: ButtonProps) =>
    props.hover ? "var(--secondary-color)" : "var(--on-bg)"};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 2;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 4px;
    background: ${(props: ButtonProps) =>
      props.hover ? "var(--secondary-color)" : "var(--on-bg)"};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &::before {
    transform: translateY(-12px);
  }

  &::after {
    transform: translateY(12px);
  }

  ${(props: ButtonProps) =>
    props.open === true &&
    css`
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;

      &::before {
        transform: rotate(45deg) translate(35px, -35px);
      }

      &::after {
        transform: rotate(-45deg) translate(35px, 35px);
      }
    `}
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-height: 100vh;
  background: var(--on-primary-color);
  top: 0px;
  right: 0px;
  width: min(70vw, 400px);
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${(props: ListProps) =>
    props.open ? "translateX(0vw)" : "translateX(100vw)"};
  visibility: ${(props: ListProps) => (props.open ? "visible" : "hidden")};
  margin-right: -10px;
  opacity: 92%;
`;

export const NavigationLinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const NavigationLink = styled.li`
  font-size: 2rem;
`;
