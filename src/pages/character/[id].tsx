/* eslint-disable @next/next/no-img-element */
import { ICharacter, ICharacterPageProps } from "@/interfaces/characters/characters.interface";
import { api } from "@/services/api";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const RickyMortyPage = ({ character }: ICharacterPageProps) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
      <main>
        <Link href="/">Voltar</Link>
        <img src={character.image} alt={`${character.name}`} />
      </main>
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
