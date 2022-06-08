import express, { Router, Request, Response } from 'express';
import { getAllStocks } from '../../../lib/func/getter/getAllStocks';
import { Ok } from '../../lib/functions/response';

export const stockRouter: Router = express.Router();

stockRouter.get('/all', async (request: Request, response: Response) => {
  const stocks = await getAllStocks();
  return response.json(Ok(stocks));
});
