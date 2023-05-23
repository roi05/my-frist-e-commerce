export const addDecimal = (amount: number): string => {
  const formattedAmount = amount.toFixed(2);
  return formattedAmount;
};
