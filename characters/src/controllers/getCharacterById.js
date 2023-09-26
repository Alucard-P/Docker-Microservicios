const character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const characterDetail = await character.findById(id);
  response(res, 201, characterDetail);
};
