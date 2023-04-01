import { ICharacter } from "@/interfaces/characters/characters.interface";
import Link from "next/link";
import React from "react";
import { Card, StyledDetail, StyledImage, StyledSpan } from "./styled";

const CardDetailPlus = ({
  id,
  name,
  location,
  image,
  status,
  type,
  gender,
  origin,
}: ICharacter) => {
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
          <h3>
            <span>Type: </span>
            {type ? type : "None"}
          </h3>
          <h3>
            <span>Gender: </span>
            {gender}
          </h3>
          <h3>
            <span>Origin: </span>
            {origin?.name ? origin.name : "None"}
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

export default CardDetailPlus;
