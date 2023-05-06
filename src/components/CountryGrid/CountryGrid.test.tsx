import { render, screen } from "@testing-library/react";
import { CountryGrid } from "./CountryGrid";

describe("CountryGrid", () => {
  const countries = [
    {
      cca3: "USA",
      name: { common: "United States" },
      flag: "us-flag",
    },
    {
      cca3: "CAN",
      name: { common: "Canada" },
      flag: "ca-flag",
    },
  ] as any

  it("Should render the component with country cards", () => {
    render(<CountryGrid countries={countries} />);

    expect(screen.getByTestId("CountryGrid")).toBeDefined();
  });
});
