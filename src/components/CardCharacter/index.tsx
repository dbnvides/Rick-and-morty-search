import { ILocation } from "@/interfaces/characters/characters.interface";
import Link from "next/link";
import React from "react";
import { Card, StyledDetail, StyledImage, StyledSpan } from "./styled";

interface ICard {
  id: number;
  name: string;
  location: ILocation;
  image: string;
  status: string;
}

const CardCharacter = ({ id, name, location, image, status }: ICard) => {
  return (
    <Card key={id}>
      <Link href={`/character/${id}`}>
        <StyledImage>
          <img src={image} alt={`${name}`} />
        </StyledImage>

        <StyledDetail>
          <h2>{name}</h2>

          <h3>
            <span>Location:</span> {location.name}
          </h3>
        </StyledDetail>
        {status == "Alive" ? (
          <StyledSpan color={"alive"}>{status}</StyledSpan>
        ) : status == "Dead" ? (
          <StyledSpan color={"dead"}>{status}</StyledSpan>
        ) : (
          <StyledSpan color={"unknown"}>{status}</StyledSpan>
        )}
      </Link>
    </Card>
  );
};

export default CardCharacter;
