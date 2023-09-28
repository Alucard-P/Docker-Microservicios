const store = require("../database");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  // const existId = await store[model].get(id);
  // if (existId) {
  const data = await store[model].get(id);
  res.status(202).json(data);
  // } else {
  //   throw new ClientError("No existe el id", 404);
  // }
};
