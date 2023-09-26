const { catchedAsync } = require("../utils");

module.exports = {
  getData: catchedAsync(require("./getData")),
  getDataById: catchedAsync(require("./getDataById")),
  newData: catchedAsync(require("./newData")),
  editData: catchedAsync(require("./editData")),
  deleteData: catchedAsync(require("./deleteData")),
};
