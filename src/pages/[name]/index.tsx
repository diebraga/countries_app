import React from "react";
import { NextPage } from "next";
import { Country } from "@/@types";
import { CountryPageItem } from "@/components/CountryPageItem/CountryPageItem";
import { findCountryByName } from "@/utils/findCountryByName/findCountryByName";
import { FailedToLoad } from "@/components/FailedToLoad/FailedToLoad";
import Head from "next/head";

type CountryPageProps = {
  name: string;
  data: Country[];
};

const CountryPage: NextPage<CountryPageProps> = ({ name, data }) => {
  const country = findCountryByName(name, data);

  if (!country) {
    return <FailedToLoad />;
  }

  return (
    <>
      <Head>
        <title>{name} | Countries app</title>
        <meta
          name="description"
          content={`${name} description`}
        />
        <meta property="og:title" content={`${name} | Countries app`} />
        <meta
          property="og:description"
          content="Countries app that lists all world countries"
        />
        <meta property="og:url" content={``} />
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
      <CountryPageItem country={country} />
    </>
  );
};

export const getServerSideProps = async ({
  params,
}: {
  params: { name: string };
}) => {
  const { name } = params;

  return {
    props: {
      name,
    },
  };
};

export default CountryPage;
