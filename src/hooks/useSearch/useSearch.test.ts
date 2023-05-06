import { renderHook, act } from '@testing-library/react';
import { Country } from "@/@types";
import { useSearch } from './useSearch';

describe('useSearch', () => {
  const countries: Country[] = [
    { cca3: 'USA', name: { common: 'United States' }, flag: 'us-flag' },
    { cca3: 'CAN', name: { common: 'Canada' }, flag: 'ca-flag' },
    { cca3: 'MEX', name: { common: 'Mexico' }, flag: 'mx-flag' },
  ] as any[]

  it('Should update searchInput and filteredCountries correctly', () => {
    const { result } = renderHook(() => useSearch(countries));

    expect(result.current.searchInput).toEqual("");
    expect(result.current.filteredCountries).toEqual(countries);

    act(() => {
      result.current.setSearchInput('united');
    });

    expect(result.current.searchInput).toEqual('united');
    expect(result.current.filteredCountries).toEqual([
      { cca3: 'USA', name: { common: 'United States' }, flag: 'us-flag' },
    ]);

    act(() => {
      result.current.setSearchInput('ca');
    });

    expect(result.current.searchInput).toEqual('ca');
    expect(result.current.filteredCountries).toEqual([
      { cca3: 'CAN', name: { common: 'Canada' }, flag: 'ca-flag' },
    ]);

    act(() => {
      result.current.setSearchInput('');
    });

    expect(result.current.searchInput).toEqual('');
    expect(result.current.filteredCountries).toEqual(countries);
  });
});
