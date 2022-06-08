import { calculateRandomBetween } from './calculateRandomBetween';

export const calculateUpdatedMomentum = (momentum: number) => {
  if (momentum < -0.001 || momentum > 0.001) return momentum / 1.25;

  return calculateRandomBetween(0, 1, 2) > 0.98
    ? calculateRandomBetween(-0.05, 0.05, 4)
    : 0;
};

export const calculateMomentumEffect = (momentum: number) => momentum * 0.05;
