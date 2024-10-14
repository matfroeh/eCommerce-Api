import { Router } from 'express';
import { getOrders, createOrder } from '../controllers/orders.js';

const orderRouter = Router();

orderRouter.route('/').get(getOrders).post(createOrder);

export default orderRouter;
