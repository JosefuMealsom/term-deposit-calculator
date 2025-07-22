export class InvalidTime extends Error {}
export class InvalidCompoundFrequency extends Error {}

export enum CompoundFrequency {
  Monthly = 12,
  Quarterly = 4,
  Annually = 1,
}

// Formula: P(1 + rt)
// Where: P = principal, r = interest rate, t = time in years
export function interestAtMaturity(
  principal: number,
  annualInterest: number,
  timeInMonths: number
) {
  if (timeInMonths < 0) {
    throw new InvalidTime("Time period for interest calculation must be >= 0");
  }

  const years = timeInMonths / 12;
  const finalBalance = principal * (1 + (annualInterest / 100) * years);
  return Math.round(finalBalance);
}

// Formula: P(1+ r/n)^tn
// Where: P = principal, r = interest rate, t = time in years, n = compounding frequency
export function calculateCompoundInterest(
  principal: number,
  annualInterest: number,
  timeInMonths: number,
  compoundFrequency: number
) {
  if (timeInMonths < 0) {
    throw new InvalidTime("Time period for interest calculation must be >= 0");
  }

  if (compoundFrequency < 0) {
    throw new InvalidCompoundFrequency("Compound frequency must be >= 0");
  }

  const years = timeInMonths / 12;
  const finalBalance =
    principal *
    (1 + annualInterest / 100 / compoundFrequency) **
      (years * compoundFrequency);

  return Math.round(finalBalance);
}
