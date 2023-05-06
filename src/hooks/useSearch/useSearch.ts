import { useState, useEffect } from "react";
import { Country } from "@/@types";

export const useSearch = (
  countries: Country[] | undefined
): { searchInput: string; setSearchInput: (value: string) => void; filteredCountries: Country[] | undefined } => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<Country[] | undefined>(undefined);

  useEffect(() => {
    if (countries) {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  }, [countries, searchInput]);

  return { searchInput, setSearchInput, filteredCountries };
};
