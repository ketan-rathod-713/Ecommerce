const express = require("express");
const { addToCart, fetchCartByUser } = require("../controller/Cart");

const router = express.Router();

// /cart
router.post("/", addToCart)
.get("/:userId", fetchCartByUser)

exports.router = router;