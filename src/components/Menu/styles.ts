import styled, { css } from "styled-components";

interface ButtonProps {
  open: boolean;
  hover: boolean;
}

export const MenuContainer = styled.div``;

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const HamburgerButton = styled.div`
  width: 40px;
  height: 4px;
  background: ${(props: ButtonProps) => props.hover ? '#03DAC6' : 'white'};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 4px;
    background: ${(props: ButtonProps) => props.hover ? '#03DAC6' : 'white'};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
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
      
`;
