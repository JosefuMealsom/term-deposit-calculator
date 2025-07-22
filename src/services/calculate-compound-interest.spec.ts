import {
  calculateCompoundInterest,
  CompoundFrequency,
  InvalidCompoundFrequency,
  InvalidTime,
} from "./interest-calculations";
import { describe, expect, it } from "vitest";

// Note: Interest rate outputs validated with https://www.bendigobank.com.au/calculators/deposit-and-savings/
describe("calculateCompoundInterest", () => {
  it("calculates the monthly compounding final balance correctly", () => {
    let principal = 10000;
    let interest = 1.1;
    let timeInMonths = 36;
    const period = CompoundFrequency.Monthly;

    expect(
      calculateCompoundInterest(principal, interest, timeInMonths, period)
    ).toEqual(10335);
  });

  it("calculates the quarterly compounding final balance correctly", () => {
    const principal = 10000;
    const interest = 1.1;
    const timeInMonths = 36;
    const period = CompoundFrequency.Quarterly;

    expect(
      calculateCompoundInterest(principal, interest, timeInMonths, period)
    ).toBe(10335);
  });

  it("calculates the annual compounding final balance correctly", () => {
    const principal = 10000;
    const interest = 1.1;
    const timeInMonths = 36;
    const period = CompoundFrequency.Annually;

    expect(
      calculateCompoundInterest(principal, interest, timeInMonths, period)
    ).toBe(10334);
  });

  it("calculates final balance with 0 interest rate correctly", () => {
    const principal = 10000;
    const interest = 0;
    const timeInMonths = 36;
    const period = CompoundFrequency.Annually;

    expect(
      calculateCompoundInterest(principal, interest, timeInMonths, period)
    ).toBe(10000);
  });

  describe("errors", () => {
    it("raises an error when time in months is < 0", () => {
      const principal = 10000;
      const interest = 1.1;
      const timeInMonths = -1;
      const period = CompoundFrequency.Annually;

      const t = () =>
        calculateCompoundInterest(principal, interest, timeInMonths, period);

      expect(t).toThrow(InvalidTime);
    });

    it("raises an error when compound frequency is < 0", () => {
      const principal = 10000;
      const interest = 1.1;
      const timeInMonths = 36;
      const period = -1;

      const t = () =>
        calculateCompoundInterest(principal, interest, timeInMonths, period);

      expect(t).toThrow(InvalidCompoundFrequency);
    });
  });
});
