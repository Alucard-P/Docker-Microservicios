const character = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { _id } = req.body;
  const existId = await character.findById(_id);
  if (!existId) {
    const newCharacter = await character.create(req.body);
    response(res, 201, newCharacter);
  } else throw new ClientError("Ya existe este id, escriba otro", 404);
};
