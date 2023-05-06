import "../../styles/global.css";
import type { AppProps } from "next/app";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher/fetcher";
import { Country } from "@/@types";
import Header from "@/components/Header/Header";
import { FailedToLoad } from "@/components/FailedToLoad/FailedToLoad";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { getCountriesWithBorders } from "@/utils/getCountriesWithBorders/getCountriesWithBorders";
import { useSearch } from "@/hooks/useSearch/useSearch";
import { CountryNotFound } from "@/components/CountryNotFound/CountryNotFound";

export default function App({ Component, pageProps }: AppProps) {
  const countries = useSWR<Country[]>(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  const countriesWithBorders = getCountriesWithBorders(countries.data);
  const { searchInput, setSearchInput, filteredCountries } =
    useSearch(countriesWithBorders);

  if (countries.error) return <FailedToLoad />;
  if (countries.isLoading) return <LoadingSpinner />;

  const props = {
    data: filteredCountries,
    ...pageProps,
  };

  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      {!filteredCountries?.length ? (
        <CountryNotFound />
      ) : (
        <Component {...props} />
      )}
    </>
  );
}
