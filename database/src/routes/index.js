const { Router } = require("express");
const middlewares = require("../middlewares");
const controllers = require("../controllers");

const router = Router();

router.get("/:model", middlewares.validateModel, controllers.getData);

router.get("/:model/:id", middlewares.validateModel, controllers.getDataById);

router.put("/:model/:id", middlewares.validateModel, controllers.editData);

router.delete("/:model/:id", middlewares.validateModel, controllers.deleteData);

router.post(
  "/:model",
  middlewares.validateModel,
  middlewares.validateData,
  controllers.newData
);

module.exports = router;
