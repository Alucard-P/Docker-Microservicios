const planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const editPlanet = await planet.edit(id, req.body);
  response(res, 201, editPlanet);
};
