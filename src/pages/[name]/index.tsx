import React from "react";
import { NextPage } from "next";
import { Country } from "@/@types";
import { CountryPageItem } from "@/components/CountryPageItem/CountryPageItem";
import { findCountryByName } from "@/utils/findCountryByName/findCountryByName";
import { FailedToLoad } from "@/components/FailedToLoad/FailedToLoad";

type CountryPageProps = {
  name: string;
  data: Country[];
};

const CountryPage: NextPage<CountryPageProps> = ({ name, data }) => {
  const country = findCountryByName(name, data);

  if (!country) {
    return <FailedToLoad />;
  }

  return <CountryPageItem country={country} />;
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
