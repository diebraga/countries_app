import "../../styles/global.css";
import type { AppProps } from "next/app";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher/fetcher";
import { Country } from "@/@types";
import Header from "@/components/Header/Header";
import { findCountriesByBorderCodes } from "@/utils/findCountriesByBorderCodes/findCountriesByBorderCodes";
import { FailedToLoad } from "@/components/FailedToLoad/FailedToLoad";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { getCountriesWithBorders } from "@/utils/getCountriesWithBorders/getCountriesWithBorders";

export default function App({ Component, pageProps }: AppProps) {
  const countries = useSWR<Country[]>(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  if (countries.error) return <FailedToLoad />;
  if (countries.isLoading) return <LoadingSpinner />;

  const countriesWithBorders = getCountriesWithBorders(countries.data)

  const props = {
    data: countriesWithBorders,
    ...pageProps,
  };

  return (
    <>
      <Header />
      <Component {...props} />
    </>
  );
}
