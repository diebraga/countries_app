import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import { expect } from '@jest/globals';

jest.mock("../../components/CountryGrid/CountryGrid", () => ({
  CountryGrid: jest.fn(() => <div>Mocked CountryGrid</div>),
}));

describe("Home", () => {
  it("Should render Home page", () => {
    render(<Home data={{} as any}/>);

    const countryGridElement = screen.getByText("Mocked CountryGrid");
    expect(countryGridElement).toBeDefined();
  });
});
