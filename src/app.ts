import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/products/product.route';
import { orderRoutes } from './app/modules/orders/order.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api', productRoutes);
app.use('/api', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the api world of e-commerce');
});

// Handle 404 - Route not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
