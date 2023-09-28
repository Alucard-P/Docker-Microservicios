const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { _id, name } = req.body;
  if (!name) throw new ClientError("Falta colocar el nombre", 401);
  else if (!_id) throw new ClientError("Falta colocar un id", 402);
  else next();
};
