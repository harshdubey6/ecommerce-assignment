"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = exports.getCategories = void 0;
const prisma_1 = require("../Utils/prisma");
const getCategories = async (req, res) => {
    const categories = await prisma_1.prisma.category.findMany();
    res.json(categories);
};
exports.getCategories = getCategories;
const createCategory = async (req, res) => {
    const { name } = req.body;
    const existing = await prisma_1.prisma.category.findUnique({ where: { name } });
    if (existing)
        return res.status(400).json({ error: "Category already exists" });
    const category = await prisma_1.prisma.category.create({ data: { name } });
    res.status(201).json(category);
};
exports.createCategory = createCategory;
