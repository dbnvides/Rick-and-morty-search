import { IChildrenProp } from "@/interfaces/globalTypes.interface";
import React from "react";
import { StyledMenu } from "./styled";

const MenuDropDown = ({ children }: IChildrenProp) => {
  return <StyledMenu>{children}</StyledMenu>;
};

export default MenuDropDown;
