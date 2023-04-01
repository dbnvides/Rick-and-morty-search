import Head from "next/head";
import Card from "@/components/CardCharacter";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { useContext } from "react";
import {
  Main,
  StyledPagination,
  StyledNumberPage,
  StyledNextPage,
  StyledPreviousPage,
} from "@/styles/globalStyle";
import ListCards from "@/components/ListCards";
import SectionMainCard from "@/components/MainSectionCards";
import SectionMainFilters from "@/components/MainSectionFilters";
import { characterContext } from "@/context/characterContext";
import Link from "next/link";

export default function Home() {
  const {
    nextPage,
    character,
    information,
    menuDropDown,
    visivel,
    setPage,
    setSearch,
    setStatus,
    status,
    previousPage,
    page,
  } = useContext(characterContext);

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Link href={"https://github.com/dbnvides/Rick-and-morty-search"} target="blank">
          Respostório
        </Link>
      </Header>
      <Container>
        <Main>
          <SectionMainFilters />
          <SectionMainCard>
            <ListCards>
              {character.map((char: any) => (
                <Card
                  key={char.id}
                  id={char.id}
                  image={char.image}
                  location={char.location}
                  name={char.name}
                  status={char.status}
                />
              ))}
            </ListCards>
            <StyledPagination>
              {page > 1 && (
                <StyledPreviousPage onClick={() => previousPage()}>
                  Previous Page
                </StyledPreviousPage>
              )}
              <StyledNumberPage>{page}</StyledNumberPage>
              {information?.info.next && (
                <StyledNextPage onClick={() => nextPage()}>Next page</StyledNextPage>
              )}
            </StyledPagination>
          </SectionMainCard>
        </Main>
      </Container>
    </>
  );
}
