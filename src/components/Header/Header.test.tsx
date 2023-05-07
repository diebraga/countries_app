import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Header from "./Header";
import { expect } from '@jest/globals';

jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

jest.mock("next/router", () => {
  return {
    useRouter: jest.fn(),
  };
});

describe("Header", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
    });
  });

  it("Should render the header", () => {
    render(<Header searchInput="" setSearchInput={jest.fn()} />);

    const linkElement = screen.getByText("COUNTRIES APP");

    expect(linkElement).toBeDefined();
  });

  it("Should reset the search input when the router pathname changes", () => {
    const setSearchInput = jest.fn();
    const router = { pathname: "/brazil" };
  
    (useRouter as jest.Mock).mockReturnValue(router);
  
    render(<Header searchInput="example" setSearchInput={setSearchInput} />);
  
    expect(setSearchInput).toHaveBeenCalledWith("");
  });  
});
