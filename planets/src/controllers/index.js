const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  createPlanet: catchedAsync(require("./createPlanet")),
  getPlanetById: catchedAsync(require("./getPlanetById")),
  editPlanet: catchedAsync(require("./editPlanet")),
  deletePlanet: catchedAsync(require("./deletePlanet")),
};
