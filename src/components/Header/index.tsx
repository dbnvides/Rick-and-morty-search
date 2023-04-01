import React from "react";
import { StyledHeader } from "./styled";
import Container from "../Container";
import Navbar from "../NavBar";
import { IChildrenProp } from "@/interfaces/globalTypes.interface";

const Header = ({ children }: IChildrenProp) => {
  return (
    <StyledHeader>
      <Container>
        <Navbar>{children}</Navbar>
      </Container>
    </StyledHeader>
  );
};

export default Header;
