const film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const editFilm = await film.edit(id, req.body);
  response(res, 201, editFilm);
};
