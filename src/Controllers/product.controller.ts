import { Request, Response } from "express";
import { prisma } from "../Utils/prisma";

export const getProducts = async (req: Request, res: Response) => {
  const { category, search } = req.query;
  const products = await prisma.product.findMany({
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

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
    include: { category: true }
  });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
};

export const createProduct = async (req: Request, res: Response) => {
  const { title, description, price, categoryId } = req.body;
  const product = await prisma.product.create({
    data: { title, description, price, categoryId }
  });
  res.status(201).json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, price, categoryId } = req.body;
  const product = await prisma.product.update({
    where: { id: parseInt(id) },
    data: { title, description, price, categoryId }
  });
  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.product.delete({ where: { id: parseInt(id) } });
  res.status(204).send();
};
