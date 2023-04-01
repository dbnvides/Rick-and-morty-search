import { IChildrenProp } from "@/interfaces/globalTypes.interface";
import React from "react";
import { StyledListCard } from "./styled";

const SectionMainCard = ({ children }: IChildrenProp) => {
  return <StyledListCard>{children}</StyledListCard>;
};

export default SectionMainCard;
