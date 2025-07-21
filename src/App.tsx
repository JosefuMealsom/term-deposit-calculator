import { useEffect, useState } from "react";
import {
  interestAtMaturity,
  calculateCompoundInterest,
  CompoundFrequency,
} from "./services/interest-calculations";

export function App() {
  const [principal, setPrincipal] = useState(10000);
  const [interest, setInterest] = useState(1.1);
  const [timeInMonths, setTimeInMonths] = useState(36);
  const [finalBalance, setFinalBalance] = useState<number>();
  const [compoundingFrequency, setCompoundingFrequency] = useState<number>(
    CompoundFrequency.Annually
  );

  useEffect(() => {
    if (compoundingFrequency === 0) {
      setFinalBalance(interestAtMaturity(principal, interest, timeInMonths));
    } else {
      setFinalBalance(
        calculateCompoundInterest(
          principal,
          interest,
          timeInMonths,
          compoundingFrequency
        )
      );
    }
  }, [principal, interest, timeInMonths, compoundingFrequency]);

  function removeAlphaNumericCharacters(s: string) {
    return s.replace(/[a-zA-Z].*/g, "") || "0";
  }

  return (
    <div className="flex justify-center items-center p-3">
      <div>
        <h1 className="font-bold mb-2">Term deposit calculator</h1>
        <form>
          <label className="block">Principal</label>
          <input
            type="text"
            className="border-black border mb-2"
            onBlur={(e) => {
              e.target.value = removeAlphaNumericCharacters(e.target.value);
              setPrincipal(Number(e.target.value));
            }}
            defaultValue={principal}
          />
          <label className="block">Interest</label>
          <input
            type="text"
            className="border-black border mb-2"
            onBlur={(e) => {
              e.target.value = removeAlphaNumericCharacters(e.target.value);
              setInterest(Number(e.target.value));
            }}
            defaultValue={interest}
          />
          <label className="block">Time in months</label>
          <input
            type="text"
            className="border-black border mb-2"
            onBlur={(e) => {
              e.target.value = removeAlphaNumericCharacters(e.target.value);
              setTimeInMonths(Number(e.target.value));
            }}
            defaultValue={timeInMonths}
          />
          <label className="block">Interest paid</label>
          <select
            onChange={(e) => setCompoundingFrequency(Number(e.target.value))}
            defaultValue={CompoundFrequency.Annually}
          >
            <option value={CompoundFrequency.Monthly}>Monthly</option>
            <option value={CompoundFrequency.Quarterly}>Quarterly</option>
            <option value={CompoundFrequency.Annually}>Anually</option>
            <option value={0}>Maturity</option>
          </select>
        </form>
        <div>
          <h2 className="font-bold">Final balance</h2>
          <p>{finalBalance}</p>
        </div>
      </div>
    </div>
  );
}
