import { Country } from "@/@types";

export const findCountriesByBorderCodes = (
  borderCodes: string[],
  countries: Country[]
): { name: string; flag: string }[] => {
  return countries
    .filter((country) => borderCodes?.includes(country.cca3))
    .map((country) => ({
      name: country.name.common,
      flag: country.flag,
      code: country.cca3,
      population: country.population,
    }));
};
