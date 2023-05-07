import { findCountryByName } from "./findCountryByName";
import { expect } from '@jest/globals';

describe("findCountryByName", () => {
  const countries = [
    { cca3: "USA", name: { common: "United States" }, flag: "us-flag" },
    { cca3: "CAN", name: { common: "Canada" }, flag: "ca-flag" },
    { cca3: "MEX", name: { common: "Mexico" }, flag: "mx-flag" },
  ] as any[];

  it("should return the country object when the name matches (case insensitive)", () => {
    const name = "united states";

    const result = findCountryByName(name, countries);

    expect(result).toEqual({
      cca3: "USA",
      name: { common: "United States" },
      flag: "us-flag",
    });
  });

  it("should return undefined when no country with the provided name is found", () => {
    const name = "Germany";

    const result = findCountryByName(name, countries);

    expect(result).toBeUndefined();
  });
});
