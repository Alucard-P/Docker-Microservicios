const store = require("../database");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const data = await store[model].get(id);
  res.status(202).json(data);
};
