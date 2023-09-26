const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const middlewares = require("../middlewares");

router.get("/", controllers.getCharacters);

router.post("/", middlewares.characterValidation, controllers.createCharacter);

router.get("/:id", controllers.getCharacterById);

router.put("/:id", controllers.editCharacter);

router.delete("/:id", controllers.deleteCharacter);

module.exports = router;
