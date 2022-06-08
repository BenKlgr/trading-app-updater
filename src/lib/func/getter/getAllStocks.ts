import { Stock } from '../../db/models/Stock';
import { StockValue } from '../../db/models/StockValue';

export const getAllStocks = async () => await Stock.findAll();
export const getAllStocksWithCurrentValue = async () =>
  await Stock.findAll({
    include: {
      model: StockValue,
      order: [['currentDate', 'DESC']],
      limit: 1,
    },
  });
export const getAllStocksWithLast = async (amount: number) =>
  await Stock.findAll({
    include: {
      model: StockValue,
      order: [['currentDate', 'DESC']],
      limit: amount,
    },
  });
