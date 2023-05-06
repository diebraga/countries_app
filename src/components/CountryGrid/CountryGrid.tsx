import { Country } from "@/@types";
import React from "react";
import { CountryCard } from "../CountryCard/CountryCard";

type CountryGridProps = {
  countries?: Country[];
};

const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 max-w-[1300px] mx-auto"
      data-testid="CountryGrid"
    >
      {countries?.map((country) => {
        return <CountryCard key={country.name.common} country={country} />;
      })}
    </div>
  );
};

export { CountryGrid };
