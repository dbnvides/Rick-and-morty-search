import { IChildrenProp } from "@/interfaces/globalTypes.interface";
import React from "react";
import { StyledFilter } from "./styled";

const SectionMainFilters = ({ children }: IChildrenProp) => {
  return <StyledFilter>{children}</StyledFilter>;
};

export default SectionMainFilters;
