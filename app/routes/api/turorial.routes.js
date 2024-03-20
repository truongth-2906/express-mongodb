const express = require("express");
const router = express.Router();

const tutorialController = require("../../controllers/tutorial.controller");

router.post("/", tutorialController.create);
router.get("/", tutorialController.findAll);
router.get("/published", tutorialController.findAllPublished);
router.get("/:id", tutorialController.findOne);
router.put("/:id", tutorialController.update);
router.delete("/:id", tutorialController.delete);
router.delete("/", tutorialController.deleteAll);

module.exports = router;
