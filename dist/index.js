"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./Routes/product.route"));
const category_route_1 = __importDefault(require("./Routes/category.route"));
const cart_route_1 = __importDefault(require("./Routes/cart.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/products", product_route_1.default);
app.use("/categories", category_route_1.default);
app.use("/cart", cart_route_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
