import React from "react";
import twemoji from "twemoji";
import { NextPage } from "next";
import Link from "next/link";
import { Country } from "@/@types";

type CountryPageProps = {
  name: string;
  data: Country[];
};

export const findCountryByName = (name: string, countries: Country[]): Country | undefined => {
  return countries?.find((country) => country.name.common.toLowerCase() === name.toLowerCase());
};

const CountryPage: NextPage<CountryPageProps> = ({ name, data }) => {
  const country = findCountryByName(name, data)
  
  if (!country) {
    return <div>Error: Country data not available</div>;
  }

  const svgImage = twemoji.parse(country.flag, {
    folder: "svg",
    ext: ".svg",
  });

  return (
    <div className="px-8 max-w-[700px] mx-auto pt-8">
      <div>
        <Link
          href="/"
          className="my-4 text-blue-500 underline cursor-pointer -mb-10 text-lg"
        >
          Go Back
        </Link>

        <div className="-mb-14">
          <div dangerouslySetInnerHTML={{ __html: svgImage }} />
        </div>
        <div className="text-base md:text-lg lg:mt-7">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {country.name.common}
          </h1>
          <p className="text-base md:text-lg">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p className="text-base md:text-lg">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="text-base md:text-lg">
            <strong>Capital:</strong> {country.capital}
          </p>
          <p className="text-base md:text-lg">
            <strong>Currencies:</strong>{" "}
            {Object.values(country.currencies)
              .map((currency) => currency.name)
              .join(", ")}
          </p>
          <p className="text-base md:text-lg">
            <strong>Languages:</strong>{" "}
            {Object.values(country.languages).join(", ")}
          </p>
        </div>
      </div>
    </div>
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
