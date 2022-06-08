import { StockValue } from './models/StockValue';
import { Placement } from './models/Placement';
import { Portfolio } from './models/Portfolio';
import { Stock } from './models/Stock';
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  host: 'benklingeler.de',
  database: 'trading_app',
  username: 'trading',
  password: '#Trading0607',
  dialect: 'postgres',
  models: [Stock, StockValue, Placement, Portfolio],
  logging: false,
});
