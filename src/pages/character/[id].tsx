/* eslint-disable @next/next/no-img-element */
import CardDetailPlus from "@/components/CardDetailPlus/cardDetailPlus";
import { StyledMain } from "@/components/CardDetailPlus/styled";
import Header from "@/components/Header";
import { ICharacterPageProps } from "@/interfaces/characters/characters.interface";
import { api } from "@/services/api";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

const RickyMortyPage = ({ character }: ICharacterPageProps) => {
  return (
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
      <StyledMain>
        <Header>
          <Link href={"/"}>Home</Link>
        </Header>
        <section>
          <CardDetailPlus
            id={character.id}
            image={character.image}
            location={character.location}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            type={character.type}
            key={character.id}
          />
        </section>
      </StyledMain>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { data: character } = await api.get(`character/${id}`);

  return {
    props: {
      character,
    },
  };
};

export default RickyMortyPage;
