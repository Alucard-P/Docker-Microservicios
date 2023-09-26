const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { model } = req.params;
  const { _id, name, title } = req.body;

  if (model === "Character" || model === "Planet") {
    if (!name) throw new ClientError("Falta colocar el nombre", 401);
    else if (!_id) throw new ClientError("Falta colocar un id", 402);
    else next();
  } else if (model === "Film") {
    if (!title) throw new ClientError("Falta colocar un titulo", 401);
    else if (!_id) throw new ClientError("Falta colocar un id", 402);
    else next();
  }
};
