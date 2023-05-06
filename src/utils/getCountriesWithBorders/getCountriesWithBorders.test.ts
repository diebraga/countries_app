import { findCountriesByBorderCodes } from "../findCountriesByBorderCodes/findCountriesByBorderCodes";
import { getCountriesWithBorders } from "./getCountriesWithBorders";

jest.mock('../findCountriesByBorderCodes/findCountriesByBorderCodes', () => ({
  findCountriesByBorderCodes: jest.fn((borderCodes, countries) => {
    return countries.filter((country: any) => borderCodes.includes(country.cca3));
  }),
}));

describe('getCountriesWithBorders', () => {
  const countries = [
    { cca3: 'USA', name: { common: 'United States' }, flag: 'us-flag', borders: ['CAN', 'MEX'] },
    { cca3: 'CAN', name: { common: 'Canada' }, flag: 'ca-flag', borders: ['USA'] },
    { cca3: 'MEX', name: { common: 'Mexico' }, flag: 'mx-flag', borders: ['USA'] },
  ] as any[]

  it('Should return countries with border information', () => {
    const expectedBorders = [
      { cca3: 'CAN', name: { common: 'Canada' }, flag: 'ca-flag', borders: ['USA'] },
      { cca3: 'MEX', name: { common: 'Mexico' }, flag: 'mx-flag', borders: ['USA'] },
    ];

    const result = getCountriesWithBorders(countries);

    expect(result).toEqual([
      {
        cca3: 'USA',
        name: { common: 'United States' },
        flag: 'us-flag',
        borders: ['CAN', 'MEX'],
        bordersWithFlag: expectedBorders,
      },
      {
        cca3: 'CAN',
        name: { common: 'Canada' },
        flag: 'ca-flag',
        borders: ['USA'],
        bordersWithFlag: [{ cca3: 'USA', name: { common: 'United States' }, flag: 'us-flag', borders: ['CAN', 'MEX'] }],
      },
      {
        cca3: 'MEX',
        name: { common: 'Mexico' },
        flag: 'mx-flag',
        borders: ['USA'],
        bordersWithFlag: [{ cca3: 'USA', name: { common: 'United States' }, flag: 'us-flag', borders: ['CAN', 'MEX'] }],
      },
    ]);

    // Ensure the findCountriesByBorderCodes function is called with the correct arguments
    expect(findCountriesByBorderCodes).toHaveBeenCalledWith(['CAN', 'MEX'], countries);
    expect(findCountriesByBorderCodes).toHaveBeenCalledWith(['USA'], countries);
  });

  it('Should return an empty array when no countries are provided', () => {
    const result = getCountriesWithBorders();

    expect(result).toEqual([]);
  });
});
