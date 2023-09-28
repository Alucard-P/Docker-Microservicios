const film = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { _id } = req.body;
  const existId = await film.findById(_id);
  if (!existId) {
    const newFilm = await film.create(req.body);
    response(res, 201, newFilm);
  } else throw new ClientError("Ya existe este id, escriba otro", 404);
};
