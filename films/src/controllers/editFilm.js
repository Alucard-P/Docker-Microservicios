const film = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { id } = req.params;
  const existId = await film.findById(id);
  if (existId) {
    const editFilm = await film.edit(id, req.body);
    response(res, 201, editFilm);
  } else throw new ClientError("No existe el id", 404);
};
