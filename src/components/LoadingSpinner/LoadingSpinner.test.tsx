import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from "./LoadingSpinner";
import { expect } from '@jest/globals';

describe("LoadingSpinner", () => {
  it("should render the loading spinner", () => {
    render(<LoadingSpinner />);

    const spinnerElement = screen.getByTestId("loading-spinner");
    expect(spinnerElement).toBeDefined();
  });
});
