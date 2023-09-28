const film = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { id } = req.params;
  const filmDetail = await film.findById(id);
  if (filmDetail) {
    response(res, 201, filmDetail);
  } else throw new ClientError("No existe el id", 404);
};
