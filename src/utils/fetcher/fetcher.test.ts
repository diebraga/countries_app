import { fetcher } from "./fetcher";
import { expect } from '@jest/globals';

describe("fetcher", () => {
  const apiUrl = "https://mock.com/api/data";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should return the parsed JSON response", async () => {
    const mockResponse = { data: "mocked data" };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetcher(apiUrl);

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(apiUrl);
  });

  it("Should handle fetch error by throwing an exception", async () => {
    const errorMessage = "Fetch error";
    global.fetch = jest.fn().mockRejectedValue(new Error(errorMessage));

    await expect(fetcher(apiUrl)).rejects.toThrowError(errorMessage);
    expect(fetch).toHaveBeenCalledWith(apiUrl);
  });
});
