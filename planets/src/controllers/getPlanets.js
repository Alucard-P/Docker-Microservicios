const planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const planets = await planet.list();
  response(res, 201, planets);
};
