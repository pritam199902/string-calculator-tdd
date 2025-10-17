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

describe("Two numbers", () => {
  test("should return sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
    expect(add("10,20")).toBe(30);
    expect(add("0,5")).toBe(5);
    expect(add("100,200")).toBe(300);
  });
});

describe("Multiple numbers", () => {
  test("should return sum of any amount of numbers", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("10,20,30,40")).toBe(100);
    expect(add("1,1,1,1,1,1,1,1,1,1")).toBe(10);
  });
});

describe("New lines as delimiters", () => {
  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
    expect(add("1\n2\n3\n4")).toBe(10);
  });

  test("should handle mixed commas and newlines", () => {
    expect(add("1\n2,3\n4")).toBe(10);
    expect(add("10\n20,30\n40")).toBe(100);
  });
});

describe("Custom delimiters", () => {
  test('should support custom delimiter - "//;\\n1;2" should return 3', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should support pipe delimiter", () => {
    expect(add("//|\n1|2|3")).toBe(6);
  });

  test("should support multi-character delimiter", () => {
    expect(add("//sep\n2sep3")).toBe(5);
  });

  test("should support special character delimiters", () => {
    expect(add("//$\n1$2$3")).toBe(6);
    expect(add("//@\n10@20")).toBe(30);
  });

  test("should handle single number with custom delimiter", () => {
    expect(add("//;\n5")).toBe(5);
  });

  test("should handle empty string with custom delimiter", () => {
    expect(add("//;\n")).toBe(0);
  });
});
