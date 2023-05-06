import { getCursorStyle } from "./getCursorStyle";

describe("getCursorStyle", () => {
  it("Should return 'not-allowed' true", () => {
    expect(getCursorStyle(true)).toEqual({ cursor: "not-allowed" });
  });

  it("Should return an empty object when false", () => {
    expect(getCursorStyle(false)).toEqual({});
  });
});
