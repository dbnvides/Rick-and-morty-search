import React from "react";
import { StyledInput } from "./styled";

const InputSearch = ({ setSearch, setPage, search }: any) => {
  return (
    <StyledInput
      onChange={(e) => {
        setPage(1);
        setSearch(e.target.value);
      }}
      value={search}
      placeholder="Digite um caracter"
      type="text"
    />
  );
};

export default InputSearch;
