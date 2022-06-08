import moment, { Moment } from 'moment';
import { StockValue } from '../db/models/StockValue';
import { calculateUpdatedValue } from '../func/calculations/calculateUpdatedValue';
import { getAllStocks, getAllStocksWithCurrentValue } from '../func/getter/getAllStocks';

export const executeSecondsTrigger = async (currentMoment: Moment) => {
  const stocks = await getAllStocksWithCurrentValue();

  const updatedStockValueBulk = [];

  for (const stock of stocks) {
    const stockId = stock.id;

    const newValue = (await calculateUpdatedValue(stock)).toFixed(4);

    updatedStockValueBulk.push({
      value: newValue,
      currentDate: currentMoment.toDate(),
      stockId,
    });
  }

  await StockValue.bulkCreate(updatedStockValueBulk);
};
