import sequelize from "./index.js";
import User from "../models/User.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

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

//  ???? the model should have the foreign key inside the array products???? how

// Product.hasMany(Order, {
//   foreignKey: { allowNull: false, name: "productId" },
// });
// Order.belongsTo(Product, {
//   foreignKey: { allowNull: false, name: "productId" },
//   onDelete: "CASCADE",
// });

sequelize.sync();
