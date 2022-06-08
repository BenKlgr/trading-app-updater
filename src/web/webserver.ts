import express, { Express } from 'express';
import { routerConfig } from './routes/routerConfig';

// Initialize
const server: Express = express();
server.use(express.json());

// Init routers
routerConfig.routers.forEach((routerConfig) => {
  server.use(routerConfig.baseUrl, routerConfig.router);
});

server.listen(9090, '127.0.0.1', () => {
  console.log(`Server started on address https://127.0.0.1:9090`);
});
