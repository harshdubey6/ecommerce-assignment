import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import productRoutes from "./Routes/product.route";
import categoryRoutes from "./Routes/category.route";
import cartRoutes from "./Routes/cart.route";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
