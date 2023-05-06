import "../../styles/global.css";
import type { AppProps } from "next/app";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher/fetcher";
import { Country } from "@/@types";
import Header from "@/components/Header/Header";
import { findCountriesByBorderCodes } from "@/utils/findCountriesByBorderCodes/findCountriesByBorderCodes";

export default function App({ Component, pageProps }: AppProps) {
  const countries = useSWR<Country[]>(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  if (countries.error) return <div>failed to load</div>;
  if (countries.isLoading) return <div>loading...</div>;

  const countriesWithBorders = countries.data?.map((country) => {
    const countryWithBorders = {
      ...country,
      bordersWithFlag: findCountriesByBorderCodes(
        country.borders,
        countries.data as Country[]
      ),
    };
    return countryWithBorders;
  });

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
