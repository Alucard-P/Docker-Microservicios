const planet = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { id } = req.params;
  const existId = await planet.findById(id);
  if (existId) {
    const data = await planet.delete(id);
    response(res, 201, data);
  } else throw new ClientError("No existe el id", 404);
};
