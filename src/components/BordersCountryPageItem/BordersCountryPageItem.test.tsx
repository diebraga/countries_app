import { render, screen } from "@testing-library/react";
import { BordersCountryPageItem } from "./BordersCountryPageItem";
import { expect } from '@jest/globals';

jest.mock(
  "next/link",
  () =>
    ({ children }: { children: any }) =>
      children
);
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BordersCountryPageItem", () => {
  const country = {
    cca3: "USA",
    name: { common: "United States" },
    flag: "us-flag",
    bordersWithFlag: [
      { cca3: "CAN", name: "Canada", flag: "ca-flag", code: "CAN" },
      { cca3: "MEX", name: "Mexico", flag: "mx-flag", code: "MEX" },
    ],
  } as any;

  it("should render the component with border countries", () => {
    render(<BordersCountryPageItem country={country} />);

    expect(screen.getByText("Canada")).toBeDefined();
  });

  it("should not render the component without border countries", () => {
    render(
      <BordersCountryPageItem country={{ ...country, bordersWithFlag: [] }} />
    );

    expect(screen.queryByTestId("borders-section")).toBeNull();
  });
});
