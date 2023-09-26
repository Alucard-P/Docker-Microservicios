const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  createFilm: catchedAsync(require("./createFilm")),
  getFilmById: catchedAsync(require("./getFilmById")),
  editFilm: catchedAsync(require("./editFilm")),
  deleteFilm: catchedAsync(require("./deleteFilm")),
};
