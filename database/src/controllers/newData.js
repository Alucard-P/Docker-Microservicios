const store = require("../database");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { model } = req.params;
  const { _id } = req.body;
  const existId = await store[model].get(_id);
  if (!existId) {
    const newPost = await store[model].insert(req.body);
    res.status(202).send({ status: "Cargado exitoso", newData: newPost });
  } else {
    throw new ClientError("Ya existe este id, escriba otro", 404);
  }
};
