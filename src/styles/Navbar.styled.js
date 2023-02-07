import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonStyled = styled.button`
  background-color: red;
  color: black;
  border-radius: 3px;
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  right: 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarContainerStyled = styled.div`
  position: relative;
  width: 100%;
  background-color: #232323;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 60px;
`;
export const NavLinkStyled = styled(NavLink)`
  color: white;
  padding: 10px;
  text-transform: uppercase;

  &:hover {
    color: pink;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarExtendStyled = styled.nav`
  height: ${(props) => (props.extendNav ? "100vh" : "60px")};
`;
