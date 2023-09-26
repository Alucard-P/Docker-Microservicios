const character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const data = await character.delete(id);
  response(res, 201, data);
};
