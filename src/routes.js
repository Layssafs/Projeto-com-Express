const express = require("express");
const controller = require("./modules/userController");

const router = express.Router();

router.post("/users", controller.create);
router.get("/users", controller.list);
router.get("/users/:id", controller.show);
router.put("/users/:id", controller.update);
router.delete("/users/:id", controller.remove);

module.exports = router;