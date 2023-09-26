const film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const filmDetail = await film.findById(id);
  response(res, 201, filmDetail);
};
