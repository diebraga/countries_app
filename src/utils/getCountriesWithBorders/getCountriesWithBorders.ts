import { Country } from "@/@types";
import { findCountriesByBorderCodes } from "../findCountriesByBorderCodes/findCountriesByBorderCodes";

export function getCountriesWithBorders(countries?: Country[]): Country[] | [] {
  if (!countries) {
    return [];
  }

  const countriesWithBorders = countries?.map((country) => {
    const countryWithBorders = {
      ...country,
      bordersWithFlag: findCountriesByBorderCodes(country.borders, countries),
    };
    return countryWithBorders;
  });

  return countriesWithBorders as Country[];
}
