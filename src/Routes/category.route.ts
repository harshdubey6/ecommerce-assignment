// src/routes/category.routes.ts
import { Router } from "express";
import { getCategories, createCategory } from "../Controllers/category.controller";

const router = Router();

router.get("/", getCategories);
router.post("/", createCategory);

export default router;