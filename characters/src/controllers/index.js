const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  createCharacter: catchedAsync(require("./createCharacter")),
  getCharacterById: catchedAsync(require("./getCharacterById")),
  editCharacter: catchedAsync(require("./editCharacter")),
  deleteCharacter: catchedAsync(require("./deleteCharacter")),
};
