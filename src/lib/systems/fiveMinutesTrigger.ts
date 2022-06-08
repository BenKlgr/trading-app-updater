import { Moment } from 'moment';
import { calculateRandomBetween } from '../func/calculations/calculateRandomBetween';
import { calculateUpdatedTrend } from '../func/calculations/calculateUpdatedTrend';
import { getAllStocks } from '../func/getter/getAllStocks';

export const executeFiveMinutesTrigger = async (moment: Moment) => {
  const stocks = await getAllStocks();

  for (const stock of stocks) {
    if (calculateRandomBetween(0, 1, 2) > 1 - 1 / 12) {
      stock.update({
        currentTrend: calculateUpdatedTrend(),
      });
    }
  }
};
