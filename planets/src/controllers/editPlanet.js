const planet = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { id } = req.params;
  const existId = await planet.findById(id);
  if (existId) {
    const editPlanet = await planet.edit(id, req.body);
    response(res, 201, editPlanet);
  } else throw new ClientError("No existe el id", 404);
};
