import { Router } from 'express';
import { getOrders } from '../controllers/orders.js';

const orderRouter = Router();

orderRouter.route('/').get(getOrders);

export default orderRouter;
