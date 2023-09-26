const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Planet", "Film"].includes(model)) {
    return next();
  } else {
    throw new ClientError("Invalid Model", 404);
  }
};
