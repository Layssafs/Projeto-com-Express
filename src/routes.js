const express = require("express");
const userController = require("./modules/userController");

const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users", userController.listUsers);
router.get("/users/:id", userController.getUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;