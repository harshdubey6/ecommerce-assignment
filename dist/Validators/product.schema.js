"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = void 0;
const zod_1 = require("zod");
const productSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    description: zod_1.z.string().min(1, "Description is required"),
    price: zod_1.z.number().positive("Price must be positive"),
    categoryId: zod_1.z.number().int("Category ID must be an integer")
});
const validateProduct = (req, res, next) => {
    try {
        req.body = productSchema.parse(req.body);
        next();
    }
    catch (err) {
        return res.status(400).json({ error: err.errors.map((e) => e.message).join(", ") });
    }
};
exports.validateProduct = validateProduct;
