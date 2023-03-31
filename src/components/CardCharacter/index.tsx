import { ILocation } from "@/interfaces/characters/characters.interface";
import Link from "next/link";
import React from "react";

interface ICard {
  id: number;
  name: string;
  location: ILocation;
  image: string;
  status: string;
}

const CardCharacter = ({ id, name, location, image, status }: ICard) => {
  return (
    <li key={id}>
      <Link href={`/character/${id}`}>
        <div>
          <img src={image} alt={`${name}`} />
        </div>
        <h2>{name}</h2>
        <h3>{location.name}</h3>
        <span>{status}</span>
      </Link>
    </li>
  );
};

export default CardCharacter;
