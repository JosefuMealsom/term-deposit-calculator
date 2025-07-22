import { describe, expect, it } from "vitest";
import { interestAtMaturity, InvalidTime } from "./interest-calculations";

// Note: Interest rate outputs validated with https://www.bendigobank.com.au/calculators/deposit-and-savings/
describe("interestAtMaturity", () => {
  it("calculates the final balance correctly", () => {
    let principal = 10000;
    let interest = 1.1;
    let timeInMonths = 36;

    expect(interestAtMaturity(principal, interest, timeInMonths)).toBe(10330);
  });

  it("calculates the final balance for only part of the year correctly", () => {
    const principal = 10000;
    const interest = 1.1;
    const timeInMonths = 20;

    expect(interestAtMaturity(principal, interest, timeInMonths)).toBe(10183);
  });

  it("calculates final balance with 0 interest rate correctly", () => {
    const principal = 10000;
    const interest = 0;
    const timeInMonths = 36;

    expect(interestAtMaturity(principal, interest, timeInMonths)).toBe(10000);
  });

  describe("errors", () => {
    it("raises an error when time in months is < 0", () => {
      const principal = 10000;
      const interest = 0;
      const timeInMonths = -1;

      const t = () => interestAtMaturity(principal, interest, timeInMonths);

      expect(t).toThrow(InvalidTime);
    });
  });
});
