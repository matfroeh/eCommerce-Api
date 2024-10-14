import { Category } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
});

export const createCategory = asyncHandler(async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json(category);
});
