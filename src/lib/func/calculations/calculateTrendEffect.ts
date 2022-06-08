import { calculateRandomBetween } from './calculateRandomBetween';

export const calculateTrendEffect = (trend: number) => {
  const normalizedTrend = trend / 2;
  const calculated = calculateRandomBetween(
    -0.5 + normalizedTrend,
    0.5 + normalizedTrend,
    4
  );
  return calculated;
};
