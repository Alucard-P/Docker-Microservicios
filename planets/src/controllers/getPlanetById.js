const planet = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { id } = req.params;
  const planetDetail = await planet.findById(id);
  if (planetDetail) response(res, 201, planetDetail);
  else throw new ClientError("No existe el id", 404);
};
