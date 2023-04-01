import { ICharacter } from "@/interfaces/characters/characters.interface";
import { Information } from "@/interfaces/globalTypes.interface";
import { Dispatch, SetStateAction } from "react";

export interface IContextValue {
  character: ICharacter[];
  menuDropDown(): void;
  nextPage(): void;
  information: Information | undefined;
  visivel: boolean;
  setStatus: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
  status: string;
  setSearch: Dispatch<SetStateAction<string>>;
  previousPage(): void;
  page: number;
  search: string;
}
