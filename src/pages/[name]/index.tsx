import React from "react";
import twemoji from "twemoji";
import { NextPage } from "next";
import Link from "next/link";
import { Country } from "@/@types";
import { CountryPageItem } from "@/components/CountryPageItem/CountryPageItem";

type CountryPageProps = {
  name: string;
  data: Country[];
};

export const findCountryByName = (
  name: string,
  countries: Country[]
): Country | undefined => {
  return countries?.find(
    (country) => country.name.common.toLowerCase() === name.toLowerCase()
  );
};

const CountryPage: NextPage<CountryPageProps> = ({ name, data }) => {
  const country = findCountryByName(name, data);

  if (!country) {
    return <div>Error: Country data not available</div>;
  }

  const svgImage = twemoji.parse(country.flag, {
    folder: "svg",
    ext: ".svg",
  });

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
