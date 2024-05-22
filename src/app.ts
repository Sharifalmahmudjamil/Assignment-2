import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/peoduct.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application Route
app.use('/api/v1/product', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
