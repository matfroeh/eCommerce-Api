import { Product, Category } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.findAll({ include: Category });
    res.status(200).json(products);
    }
);

export const createProduct = asyncHandler(async (req, res) => {
    const { name, description, price, categoryId } = req.body;
    const product = await Product.create(req.body);
    const category = await product.getCategory();
    if (!category) {
        return res.status(404).json({ message: `Category with id ${categoryId} not found` });
    };
    product.dataValues.category = category;
    res.status(201).json(product);
    }
);