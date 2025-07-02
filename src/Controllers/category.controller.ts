import { Request, Response } from "express";
import { prisma } from "../Utils/prisma";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
};

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  const existing = await prisma.category.findUnique({ where: { name } });
  if (existing) return res.status(400).json({ error: "Category already exists" });
  const category = await prisma.category.create({ data: { name } });
  res.status(201).json(category);
};