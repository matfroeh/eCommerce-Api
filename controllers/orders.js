import { User, Product, Order, OrderProduct } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.findAll({include: Product});
  res.status(200).json(orders);
});

export const createOrder = asyncHandler(async (req, res) => {
    const { userId, productId, quantity } = req.body;
    const order = await Order.create(req.body);
    const user = await order.getUser();
    const orderProduct = await OrderProduct.create({ OrderId: order.id, ProductId: productId, quantity });

    // const product = await order.getProduct();
    if (!user) {
        return res.status(404).json({ message: `User with id ${userId} not found` });
    };
    // if (!product) {
    //     return res.status(404).json({ message: `Product with id ${productId} not found` });
    // };
    order.dataValues.user = user;
    order.dataValues.product = orderProduct.productId;
    // order.dataValues.quantity = quantity;
    res.status(201).json(order);
    }
);