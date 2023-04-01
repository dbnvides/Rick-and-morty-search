import React from "react";
import { SyledContainer } from "./styled";
interface IContainerProp {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProp) => {
  return <SyledContainer>{children}</SyledContainer>;
};

export default Container;
