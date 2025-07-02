"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = require("../Controllers/cart.controller");
const router = (0, express_1.Router)();
router.get("/", cart_controller_1.getCart);
router.post("/", cart_controller_1.addToCart);
router.delete("/:itemId", cart_controller_1.removeFromCart);
exports.default = router;
