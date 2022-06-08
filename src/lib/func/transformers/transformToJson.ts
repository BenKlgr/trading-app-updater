import { Stock } from '../../db/models/Stock';
import { StockValue } from '../../db/models/StockValue';

export const transformStockToJson = (stock: Stock) => {
  return {
    ...stock.toJSON(),
    stockValues: stock.stockValues.map(transformValueToJson),
  } as Stock;
};

export const transformValueToJson = (stockValue: StockValue) => {
  return {
    ...stockValue.toJSON(),
  } as StockValue;
};
