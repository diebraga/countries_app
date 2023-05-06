import { useState, useMemo } from "react";
import { Country } from "@/@types";

export const useSearch = (countries: Country[] | undefined) => {
  const [searchInput, setSearchInput] = useState("");

  const filteredCountries = useMemo(() => {
    return countries?.filter((country) =>
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [searchInput, countries]);

  return {
    searchInput,
    setSearchInput,
    filteredCountries,
  };
};
