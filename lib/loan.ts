export function monthlyPayment(principal: number, annualRate: number, months: number) {
  if (annualRate === 0) return principal / months;
  const r = annualRate / 12;
  const pow = Math.pow(1 + r, months);
  return principal * (r * pow) / (pow - 1);
}

export function totalCost(monthly: number, months: number, principal: number) {
  return monthly * months - principal;
}

export const LOAN_CONSTANTS = {
  MIN_AMOUNT: 3000,
  MAX_AMOUNT: 100000,
  MIN_MONTHS: 6,
  MAX_MONTHS: 120,
  RATE: 0.02,
};
