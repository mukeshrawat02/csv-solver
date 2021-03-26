import { solve } from "./solver"

describe("should solve a given numbers and target", () => {
  it("should return element of initial array if present", () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = solve(numbers, 2)
    expect(result).toBe(2)
  });

  it("should return addition formula for target if possible", () => {
    const numbers = [1, 2, 3, 4, 12]
    const result = solve(numbers, 7)
    expect(["4 + 3", "5 + 2"]).toContain(result)
  });

  it("should return multiplication formula for target if possible", () => {
    const numbers = [1, 2, 3, 4, 12]
    const result = solve(numbers, 36)
    expect(result).toBe("12 * 3")
  });

  it("should return complex formula for target if possible", () => {
    const numbers = [1, 2, 3, 4, 12]
    const result = solve(numbers, 120)
    expect(result).toBe("12 * ((4 + 1) * 2)")
  });

  it("should return undefined if target is not possible at low depth", () => {
    const numbers = [1, 2, 3, 15, 12]
    const result = solve(numbers, 200, 1)
    expect(result).toBe(undefined)
  });

  it("should return undefined if target is not possible at depth", () => {
    const numbers = [1, 2, 3, 15, 12]
    const result = solve(numbers, 200, 3)
    expect(result).toBe("((15 + 3) * (12 - 1)) + 2")
  });
});
