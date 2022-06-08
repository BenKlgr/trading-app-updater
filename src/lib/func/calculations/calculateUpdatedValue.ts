import { Stock } from '../../db/models/Stock';
import { getCurrentStockValue } from '../getter/getCurrentStockValue';
import { calculateTrendEffect } from './calculateTrendEffect';
import { calculateMomentumEffect, calculateUpdatedMomentum } from './momentum';

export const calculateUpdatedValue = async (stock: Stock) => {
  const momentum = stock.momentum;
  const trend = stock.currentTrend;
  const currentValue = stock.stockValues[0];

  let oldValue = 10;

  if (currentValue) {
    oldValue = currentValue.value;
  }

  const momentumEffect = momentum == 0 ? 0 : calculateMomentumEffect(momentum);
  const trendEffect = calculateTrendEffect(trend);

  const normalizedTrendEffect = trendEffect * 0.015;

  const completeEffect = momentumEffect + normalizedTrendEffect;

  const updatedMomentum = calculateUpdatedMomentum(momentum);
  stock.update({
    momentum: updatedMomentum,
  });

  if (oldValue <= 0.5 && completeEffect <= 0) return oldValue;

  return oldValue * (1 + completeEffect);
};
