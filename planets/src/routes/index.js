const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const middlewares = require("../middlewares");

router.get("/", controllers.getPlanets);

router.post("/", middlewares.planetValidation, controllers.createPlanet);

router.get("/:id", controllers.getPlanetById);

router.put("/:id", controllers.editPlanet);

router.delete("/:id", controllers.deletePlanet);

module.exports = router;
