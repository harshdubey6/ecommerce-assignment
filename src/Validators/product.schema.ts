import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive("Price must be positive"),
  categoryId: z.number().int("Category ID must be an integer")
});

export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = productSchema.parse(req.body);
    next();
  } catch (err: any) {
    return res.status(400).json({ error: err.errors.map((e: any) => e.message).join(", ") });
  }
};