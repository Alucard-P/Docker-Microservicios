const store = require("../database");

module.exports = async (req, res) => {
  const { model } = req.params;
  const data = await store[model].list();
  res.status(202).json(data);
};
