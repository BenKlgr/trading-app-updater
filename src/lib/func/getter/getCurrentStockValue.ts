import { StockValue } from '../../db/models/StockValue';

export const getCurrentStockValue = async (stockId: string) =>
  await StockValue.findOne({ where: { stockId }, order: [['currentDate', 'DESC']] });
