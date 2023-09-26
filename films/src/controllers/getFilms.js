const film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await film.list();
  response(res, 201, films);
};
