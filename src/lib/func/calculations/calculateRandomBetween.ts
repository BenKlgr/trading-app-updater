export const calculateRandomBetween = (min: number, max: number, decimals: number) => {
  const str = Number(Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
};
