const character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newCharacter = await character.create(req.body);
  response(res, 201, newCharacter);
};
