import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { SearchBox } from "./SearchBox";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SearchBox", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
    });
  });

  it("should call the setSearchInput function on input change", () => {
    const setSearchInput = jest.fn();

    render(<SearchBox searchInput="" setSearchInput={setSearchInput} />);

    const inputElement = screen.getByTestId("search");

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(setSearchInput).toHaveBeenCalledWith("test");
  });
});
