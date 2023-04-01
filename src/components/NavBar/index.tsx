import React from "react";
import { StyledNavbar } from "./styled";

interface IChildrenProp {
  children: React.ReactNode;
}

const Navbar = ({ children }: IChildrenProp) => {
  return <StyledNavbar>{children}</StyledNavbar>;
};

export default Navbar;
