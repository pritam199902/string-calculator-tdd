const add = require("../src/string-calculator");

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return 0 for undefined input", () => {
    expect(add()).toBe(0);
  });
});

describe("Single number", () => {
  test("should return the number itself for single number input", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
    expect(add("0")).toBe(0);
    expect(add("100")).toBe(100);
  });
});
