const { catchedAsync } = require("../utils");

module.exports = {
  validateModel: require("./validateModel"),
  validateData: require("./validateData"),
  validateId: catchedAsync(require("./validateId")),
};
