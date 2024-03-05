const express = require("express");
const { login, logout, register } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);

module.exports = authRouter;
