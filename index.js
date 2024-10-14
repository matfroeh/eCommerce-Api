import express from "express";
import errorHandler from "./middleware/errorHandler.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRoutes.js";
import './db/associations.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/orders", orderRouter);

app.use((req, res) => {
  res.status(404).send("Route not found");
});
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
