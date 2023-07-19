const express = require("express");
const { createUser, loginUser } = require("../controller/Auth");

const router = express.Router();

// /auth
router
.post("/signup", createUser)
.post("/login", loginUser)

exports.router = router;