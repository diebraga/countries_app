import Head from "next/head";
import { CountryGrid } from "@/components/CountryGrid/CountryGrid";
import { Country } from "@/@types";
import { SetStateAction } from "react";

type HomePros = {
  data: Country[];
  resetSearch: () => void;
};

export default function Home({ data }: HomePros) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CountryGrid countries={data} />
    </>
  );
}
