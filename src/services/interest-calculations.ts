export class InvalidTime extends Error {}

export function interestAtMaturity(
  principal: number,
  annualInterest: number,
  timeInMonths: number
) {
  if (timeInMonths < 0) {
    throw new InvalidTime("Time period for interest calculation must be >= 0");
  }

  // Formula: P(1 + rt)
  const years = timeInMonths / 12;
  const finalBalance = principal * (1 + (annualInterest / 100) * years);
  return Math.round(finalBalance);
}
