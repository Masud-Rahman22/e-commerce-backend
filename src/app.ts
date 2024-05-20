import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/products/product.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api', productRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send();
});
export default app;
// console.log(process.cwd())