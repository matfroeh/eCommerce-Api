import { Router } from 'express';
import { getOrders, createOrder, addToOrder } from '../controllers/orders.js';

const orderRouter = Router();

orderRouter.route('/').get(getOrders).post(createOrder);
orderRouter.route('/:id').post(addToOrder);

export default orderRouter;
