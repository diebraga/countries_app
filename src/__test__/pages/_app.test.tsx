import { expect } from '@jest/globals';
import { useSearch } from "../../hooks/useSearch/useSearch";
import { getCountriesWithBorders } from "../../utils/getCountriesWithBorders/getCountriesWithBorders";
import { render, screen } from "@testing-library/react";
import { AppProps } from "next/app";
import useSWR from "swr";
import App from "@/pages/_app";

jest.mock("swr");
jest.mock("../../utils/getCountriesWithBorders/getCountriesWithBorders");
jest.mock("../../hooks/useSearch/useSearch");

jest.mock("../../components/Header/Header", () => ({
  __esModule: true,
  default: () => <div>Mocked Header</div>,
}));

describe("App", () => {
  beforeEach(() => {
    (useSWR as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      isLoading: false,
    });

    (getCountriesWithBorders as jest.Mock).mockReturnValue([]);
    (useSearch as jest.Mock).mockReturnValue({
      searchInput: "",
      setSearchInput: jest.fn(),
      filteredCountries: [],
    });
  });

  it("Should render failed to load component when theres an error", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: [],
      error: { error: "error" },
      isLoading: false,
    });

    const Component = () => <div>Component</div>;
    const pageProps: AppProps["pageProps"] = {};

    render(
      <App
        Component={Component}
        pageProps={pageProps}
        router={jest.fn() as any}
      />
    );

    const failed = screen.getByText("Failed to load");
    expect(failed).toBeDefined();
  });

  it("Should render loadin spinner when isLoading is true", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      isLoading: true,
    });

    const Component = () => <div>Component</div>;
    const pageProps: AppProps["pageProps"] = {};

    render(
      <App
        Component={Component}
        pageProps={pageProps}
        router={jest.fn() as any}
      />
    );

    const spinner = screen.getByTestId("loading-spinner");
    expect(spinner).toBeDefined();
  });

  it("Should render not country found component when filtered contries array is empty", () => {
    (useSearch as jest.Mock).mockReturnValue({
      searchInput: "abcdefgijlm",
      setSearchInput: jest.fn(),
      filteredCountries: [],
    });
    const Component = () => <div>Component</div>;
    const pageProps: AppProps["pageProps"] = {};

    render(
      <App
        Component={Component}
        pageProps={pageProps}
        router={jest.fn() as any}
      />
    );

    const notFound = screen.getByText("Country not found");
    expect(notFound).toBeDefined();
  });

  it("Should render component when filtered contries array is not empty", () => {
    (useSearch as jest.Mock).mockReturnValue({
      searchInput: "abcdefgijlm",
      setSearchInput: jest.fn(),
      filteredCountries: [{ country: "country" }],
    });
    const Component = () => <div>Component</div>;
    const pageProps: AppProps["pageProps"] = {};

    render(
      <App
        Component={Component}
        pageProps={pageProps}
        router={jest.fn() as any}
      />
    );

    const component = screen.getByText("Component");
    expect(component).toBeDefined();
  });
});
