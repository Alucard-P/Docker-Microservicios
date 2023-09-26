const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) next();
  else throw new ClientError("Falta declarar el nombre del planeta", 405);
};