const character = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { id } = req.params;
  const characterDetail = await character.findById(id);
  if (characterDetail) response(res, 201, characterDetail);
  else throw new ClientError("No existe el id", 404);
};
