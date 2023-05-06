import { findCountriesByBorderCodes } from "./findCountriesByBorderCodes";

describe("findCountriesByBorderCodes", () => {
  const countries = [
    { cca3: "USA", name: { common: "United States" }, flag: "us-flag" },
    { cca3: "CAN", name: { common: "Canada" }, flag: "ca-flag" },
    { cca3: "MEX", name: { common: "Mexico" }, flag: "mx-flag" },
  ] as any;

  it("Should return an array of countries based on provided border codes", () => {
    const borderCodes = ["USA", "CAN"];

    const result = findCountriesByBorderCodes(borderCodes, countries);

    expect(result).toEqual([
      { name: "United States", flag: "us-flag", code: "USA" },
      { name: "Canada", flag: "ca-flag", code: "CAN" },
    ]);
  });

  it("Should return an empty array when no matching border codes are found", () => {
    const borderCodes = ["BRA", "ARG"];

    const result = findCountriesByBorderCodes(borderCodes, countries);

    expect(result).toEqual([]);
  });
});
