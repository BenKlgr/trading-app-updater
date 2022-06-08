import { Router } from 'express';
import { stockRouter } from './api/stocks';

export type RouterConfig = {
  routers: {
    baseUrl: string;
    router: Router;
  }[];
};
export const routerConfig: RouterConfig = {
  routers: [
    {
      baseUrl: '/api/stocks',
      router: stockRouter,
    },
  ],
};
