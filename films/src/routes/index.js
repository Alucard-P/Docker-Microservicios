const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const middlewares = require("../middlewares");

router.get("/", controllers.getFilms);

router.post("/", middlewares.filmsValidation, controllers.createFilm);

router.get("/:id", controllers.getFilmById);

router.put("/:id", controllers.editFilm);

router.delete("/:id", controllers.deleteFilm);

module.exports = router;
