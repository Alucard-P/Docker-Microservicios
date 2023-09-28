const character = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { id } = req.params;
  const existId = await character.findById(id);
  if (existId) {
    const data = await character.delete(id);
    response(res, 201, data);
  } else throw new ClientError("No existe el id", 404);
};
