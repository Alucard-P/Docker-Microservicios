const planet = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { _id } = req.body;
  const existId = await planet.findById(_id);
  if (!existId) {
    const newPlanet = await planet.create(req.body);
    response(res, 201, newPlanet);
  } else throw new ClientError("Ya existe este id, escriba otro", 404);
};
