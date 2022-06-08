import { calculateRandomBetween } from './calculateRandomBetween';

export const calculateUpdatedTrend = () => {
  return calculateRandomBetween(-0.0025, 0.0025, 4);
};
