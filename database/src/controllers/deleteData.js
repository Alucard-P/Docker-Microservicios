const store = require("../database");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const existId = await store[model].get(id);
  if (existId) {
    await store[model].deleted(id);
    res.status(202).json({ message: "Fue eliminado con exito" });
  } else {
    throw new ClientError("No existe el id", 404);
  }
};
