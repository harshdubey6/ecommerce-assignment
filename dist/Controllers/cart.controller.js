"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCart = exports.addToCart = exports.getCart = void 0;
const prisma_1 = require("../Utils/prisma");
const getCart = async (req, res) => {
    const { userId } = req.query;
    if (!userId)
        return res.status(400).json({ error: "userId is required" });
    const cart = await prisma_1.prisma.cart.findMany({
        where: { userId: String(userId) },
        include: { product: true }
    });
    res.json(cart);
};
exports.getCart = getCart;
const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    const cartItem = await prisma_1.prisma.cart.create({
        data: { userId, productId, quantity }
    });
    res.status(201).json(cartItem);
};
exports.addToCart = addToCart;
const removeFromCart = async (req, res) => {
    const { itemId } = req.params;
    await prisma_1.prisma.cart.delete({ where: { id: parseInt(itemId) } });
    res.status(204).send();
};
exports.removeFromCart = removeFromCart;
