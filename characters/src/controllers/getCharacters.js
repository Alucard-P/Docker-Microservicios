const character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const characters = await character.list();
  response(res, 201, characters);
};
