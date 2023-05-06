import React from "react";
import twemoji from "twemoji";
import { Country } from "..";
import { NextPage } from "next";
import Link from "next/link";

type CountryPageProps = {
  country: Country;
};

const CountryPage: NextPage<CountryPageProps> = ({ country }) => {
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
  try {
    const { name } = params;

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${name.toLowerCase()}`
    );
    const [country] = await res.json();

    return {
      props: {
        country,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        country: null,
      },
    };
  }
};

export default CountryPage;
