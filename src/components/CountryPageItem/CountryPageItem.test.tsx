import { render, screen } from "@testing-library/react";
import { CountryPageItem } from "./CountryPageItem";
import { Country } from "@/@types";

jest.mock("next/link", () => {
  return ({ children }: { children: any }) => children;
});

describe("CountryPageItem", () => {
  const country: Country = {
    name: {
      common: "United States",
    },
    flag: "us-flag",
    population: 331002651,
    region: "Americas",
    capital: "Washington, D.C.",
    currencies: {
      USD: {
        name: "United States Dollar",
      },
    },
    languages: {
      eng: "English",
    },
  } as any;

  it("Should render the component with country details", () => {
    render(<CountryPageItem country={country} />);

    const countryNameElement = screen.getByText("United States");
    const regionElement = screen.getByText("Americas");
    const capitalElement = screen.getByText("Washington, D.C.");
    const currenciesElement = screen.getByText("United States Dollar");
    const languagesElement = screen.getByText("English");

    expect(countryNameElement).toBeDefined();
    expect(regionElement).toBeDefined();
    expect(capitalElement).toBeDefined();
    expect(currenciesElement).toBeDefined();
    expect(languagesElement).toBeDefined();
  });

  it('Should render the "Go Back" link', () => {
    render(<CountryPageItem country={country} />);

    const goBackLinkElement = screen.getByText("Go Back");

    expect(goBackLinkElement).toBeDefined();
  });
});
