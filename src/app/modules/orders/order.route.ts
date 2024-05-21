import express from 'express';
import { orderControllers } from './order.controller';
const router = express.Router();

router.post('/orders', orderControllers.createOrder)
router.get('/orders', orderControllers.getAllOrders)

export const orderRoutes = router;