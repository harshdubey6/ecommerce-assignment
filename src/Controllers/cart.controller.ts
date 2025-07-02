import { Request, Response } from "express";
import { prisma } from "../Utils/prisma";

export const getCart = async (req: Request, res: Response) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: "userId is required" });
  const cart = await prisma.cart.findMany({
    where: { userId: String(userId) },
    include: { product: true }
  });
  res.json(cart);
};

export const addToCart = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;
  const cartItem = await prisma.cart.create({
    data: { userId, productId, quantity }
  });
  res.status(201).json(cartItem);
};

export const removeFromCart = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  await prisma.cart.delete({ where: { id: parseInt(itemId) } });
  res.status(204).send();
};