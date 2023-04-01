import { ICharacter } from "@/interfaces/characters/characters.interface";
import { IChildrenProp, Information } from "@/interfaces/globalTypes.interface";
import { api } from "@/services/api";
import { createContext, useEffect, useState } from "react";
import { IContextValue } from "./character.interfaces";

export const characterContext = createContext({} as IContextValue);

export const CharacterProvider = ({ children }: IChildrenProp) => {
  const [visivel, setVisible] = useState(false);
  const [status, setStatus] = useState("character");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [information, setInformation] = useState<Information>();
  const [character, setCharacter] = useState<ICharacter[]>([]);

  const menuDropDown = () => {
    setVisible((visivel) => !visivel);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  let urlComplete = `character/?page=${page}&name=${search}`;

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await api.get(urlComplete);
        setInformation(response.data);
        setCharacter(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacter();
  }, [urlComplete]);

  return (
    <characterContext.Provider
      value={{
        character,
        menuDropDown,
        nextPage,
        information,
        visivel,
        setPage,
        setSearch,
        setStatus,
        status,
        previousPage,
        page,
        search,
      }}
    >
      {children}
    </characterContext.Provider>
  );
};
