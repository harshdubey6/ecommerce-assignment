"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const prisma_1 = require("../Utils/prisma");
const getProducts = async (req, res) => {
    const { category, search } = req.query;
    const products = await prisma_1.prisma.product.findMany({
        where: {
            AND: [
                category ? { category: { name: String(category) } } : {},
                search ? { title: { contains: String(search), mode: "insensitive" } } : {},
            ]
        },
        include: { category: true },
    });
    res.json(products);
};
exports.getProducts = getProducts;
const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await prisma_1.prisma.product.findUnique({
        where: { id: parseInt(id) },
        include: { category: true }
    });
    if (!product)
        return res.status(404).json({ error: "Product not found" });
    res.json(product);
};
exports.getProductById = getProductById;
const createProduct = async (req, res) => {
    const { title, description, price, categoryId } = req.body;
    const product = await prisma_1.prisma.product.create({
        data: { title, description, price, categoryId }
    });
    res.status(201).json(product);
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, categoryId } = req.body;
    const product = await prisma_1.prisma.product.update({
        where: { id: parseInt(id) },
        data: { title, description, price, categoryId }
    });
    res.json(product);
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await prisma_1.prisma.product.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
};
exports.deleteProduct = deleteProduct;
