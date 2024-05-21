import express from 'express';
import { productControllers } from './product.controller';
const router = express.Router();

router.post('/products', productControllers.createProduct)
router.get('/products', productControllers.getAllProducts)
router.get('/products/:productId', productControllers.getASingleProduct)
router.put('/products/:productId', productControllers.updateASingleProduct)
router.delete('/products/:productId', productControllers.deleteASingleProduct)

export const productRoutes = router;