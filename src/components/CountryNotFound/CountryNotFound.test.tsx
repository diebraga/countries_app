import { render, screen } from "@testing-library/react";
import { CountryNotFound } from "./CountryNotFound";

describe("CountryNotFound", () => {
  it('Should render "Country not found"', () => {
    render(<CountryNotFound />);

    const messageElement = screen.getByText("Country not found");
    expect(messageElement).toBeDefined();
  });
});
