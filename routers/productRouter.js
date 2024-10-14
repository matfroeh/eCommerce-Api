import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/products.js';

const productRouter = Router();

productRouter.route('/').get(getProducts).post(createProduct);

export default productRouter;