import React, { useContext } from "react";
import { StyledNavbar } from "./styled";
import { characterContext } from "@/context/characterContext";
import { StyledMenu } from "../MenuDropDown/styled";
import { IChildrenProp } from "@/interfaces/globalTypes.interface";

const Navbar = ({ children }: IChildrenProp) => {
  const { menuDropDown, visivel, setStatus } = useContext(characterContext);

  return (
    <StyledNavbar>
      <img src="../logo.png" alt="logo" />
      <button onClick={() => menuDropDown()}>{!visivel ? "Menu" : "Fechar"}</button>
      {visivel && <StyledMenu>{children}</StyledMenu>}
    </StyledNavbar>
  );
};

export default Navbar;
