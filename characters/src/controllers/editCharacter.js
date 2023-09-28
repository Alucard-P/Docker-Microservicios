const character = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { id } = req.params;
  const existId = await character.findById(id);
  if (existId) {
    const editCharacter = await character.edit(id, req.body);
    response(res, 201, editCharacter);
  } else throw new ClientError("No existe el id", 404);
};
