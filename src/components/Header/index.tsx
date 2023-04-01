import React from "react";
import { StyledHeader } from "./styled";
import { IChildrenProp } from "@/interfaces/globalTypes.interface";

const Header = ({ children }: IChildrenProp) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
