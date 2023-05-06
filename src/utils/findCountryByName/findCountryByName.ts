import { Country } from "@/@types";

export const findCountryByName = (
  name: string,
  countries: Country[]
): Country | undefined => {
  return countries?.find(
    (country) => country.name.common.toLowerCase() === name.toLowerCase()
  );
};
