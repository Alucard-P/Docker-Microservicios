const planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const planetDetail = await planet.findById(id);
  response(res, 201, planetDetail);
};
