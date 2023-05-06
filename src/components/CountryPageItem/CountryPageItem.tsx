import { Country } from "@/@types";
import Link from "next/link";
import React from "react";
import twemoji from "twemoji";
import { BordersCountryPageItem } from "../BordersCountryPageItem/BordersCountryPageItem";

type CountryPageItemProps = {
  country: Country;
};

const CountryPageItem: React.FC<CountryPageItemProps> = ({ country }) => {
  const svgImage = twemoji.parse(country.flag, {
    folder: "svg",
    ext: ".svg",
  });

  return (
    <div className="max-w-[1300px] mx-auto px-8 py-4">
      <div className="flex items-center justify-center border-2 p-4 rounded-2xl shadow-sm py-6">
        <div className="flex flex-col w-full max-w-[700px]">
          <Link
            href="/"
            className="my-4 text-blue-500 underline cursor-pointer text-lg"
          >
            Go Back
          </Link>

          <div className="md:-mb-14">
            <div className="" dangerouslySetInnerHTML={{ __html: svgImage }} />
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
            <BordersCountryPageItem country={country} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CountryPageItem };
