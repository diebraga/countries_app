import Head from "next/head";
import { CountryGrid } from "@/components/CountryGrid/CountryGrid";
import { Country } from "@/@types";

type HomePros = {
  data: Country[];
};

export default function Home({ data }: HomePros) {
  return (
    <>
      <Head>
        <title>Home | Countries app</title>
        <meta
          name="description"
          content="Countries app that lists all world countries"
        />
        <meta property="og:title" content="Home | Countries app" />
        <meta
          property="og:description"
          content="Countries app that lists all world countries"
        />
        <meta property="og:url" content={`https://countries-app-sepia-zeta.vercel.app`} />
        <meta property="og:image" content="https://github.com/diebraga.png" />
        <meta property="og:image:alt" content="countries app image" />
        <meta name="github:owner" content="diebraga" />
        <meta
          name="github:repo"
          content="https://github.com/diebraga/countries_app"
        />
        <meta name="github:image" content="https://github.com/diebraga.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CountryGrid countries={data} />
    </>
  );
}
