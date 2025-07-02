import { Router } from "express";
import { getCart, addToCart, removeFromCart } from "../Controllers/cart.controller";

const router = Router();

router.get("/", getCart);
router.post("/", addToCart);
router.delete("/:itemId", removeFromCart);

export default router;