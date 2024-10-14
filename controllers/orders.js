import { User, Product, Order, OrderProduct } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.findAll({include: [User, Product]});
  res.status(200).json(orders);
});
