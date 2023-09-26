const character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const editCharacter = await character.edit(id, req.body);
  response(res, 201, editCharacter);
};
