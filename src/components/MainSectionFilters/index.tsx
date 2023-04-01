import React, { useContext } from "react";
import { StyledFilter } from "./styled";
import { TitleSearch } from "@/styles/globalStyle";
import InputSearch from "../InputFilter";
import { characterContext } from "@/context/characterContext";

const SectionMainFilters = () => {
  const { setPage, setSearch, status, search } = useContext(characterContext);

  return (
    <StyledFilter>
      <TitleSearch>
        {status == "character" ? "Personagens" : status == "episode" ? "Episódios" : "Locais"}
      </TitleSearch>
      <div>
        <InputSearch setPage={setPage} setSearch={setSearch} search={search} />
        <button onClick={() => setSearch("")}>Limpar Filtro</button>
      </div>
    </StyledFilter>
  );
};

export default SectionMainFilters;
