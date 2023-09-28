const { ClientError } = require("../utils/errors");
module.exports = (req, res, next) => {
  const { _id, title } = req.body;
  if (!title) throw new ClientError("Falta colocar un titulo", 401);
  else if (!_id) throw new ClientError("Falta colocar un id", 402);
  else next();
};
