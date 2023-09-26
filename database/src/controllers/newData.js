const store = require("../database");

module.exports = async (req, res) => {
  const { model } = req.params;
  const newPost = await store[model].insert(req.body);
  res.status(202).send({ status: "Cargado exitoso", newData: newPost });
};
