import { render, screen } from "@testing-library/react";
import { findCountryByName } from "@/utils/findCountryByName/findCountryByName";
import CountryPage, { getServerSideProps } from "@/pages/[name]";
import { expect } from '@jest/globals';

jest.mock("../../utils/findCountryByName/findCountryByName");
jest.mock("../../components/CountryPageItem/CountryPageItem", () => ({
  CountryPageItem: jest.fn(() => <div>Mocked CountryPageItem</div>),
}));

describe("CountryPage", () => {
  const mockCountry = { name: "Country 1" };

  beforeEach(() => {
    (findCountryByName as jest.Mock).mockReturnValue(mockCountry);
  });

  it("renders the CountryPageItem when country is found", () => {
    render(<CountryPage name="" data={[]} />);

    const countryPageItemElement = screen.getByText("Mocked CountryPageItem");
    expect(countryPageItemElement).toBeDefined();
  });

  it("renders the FailedToLoad component when country is not found", () => {
    (findCountryByName as jest.Mock).mockReturnValue(null);

    render(<CountryPage name="" data={[]} />);

    const failedToLoadElement = screen.getByText("Failed to load");
    expect(failedToLoadElement).toBeDefined();
  });

  it("Should call correct params in getServerSideProps", async () => {
    const mockContext = {
      params: "",
    } as any;

    await getServerSideProps(mockContext);

    expect(findCountryByName).toHaveBeenCalledWith(mockContext.params, []);
  });
});
