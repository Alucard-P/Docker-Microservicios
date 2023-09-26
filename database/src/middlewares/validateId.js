const { ClientError } = require("../utils/errors");
const store = require("../database");

module.exports = async (req, res, next) => {
  const { model, id } = req.params;
  const existId = await store[model].get(id);
  if (existId) {
    next();
  } else {
    throw new ClientError("No existe el id", 404);
  }
};
