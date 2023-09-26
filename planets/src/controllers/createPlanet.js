const planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newPlanet = await planet.create(req.body);
  response(res, 201, newPlanet);
};
