import sequelize from "./index.js";
import User from "../models/User.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import OrderProduct from "../models/OrderProduct.js";

Category.hasMany(Product, {
  foreignKey: { allowNull: false, name: "categoryId" },
});
Product.belongsTo(Category, {
  foreignKey: { allowNull: false, name: "categoryId" },
  onDelete: "CASCADE",
});

User.hasMany(Order, {
  foreignKey: { allowNull: false, name: "userId" },
});
Order.belongsTo(User, {
  foreignKey: { allowNull: false, name: "userId" },
  onDelete: "CASCADE",
});

Product.belongsToMany(Order, { through: OrderProduct });
Order.belongsToMany(Product, { through: OrderProduct });

sequelize.sync();
