// const films = require("./films.json");
const axios = require("axios");
const url = "http://database:8004/Film";
// const url = "http://localhost:8004/Film";

module.exports = {
  list: async () => {
    const { data } = await axios.get(url);
    return data;
  },
  findById: async (id) => {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  },

  create: async (body) => {
    const { data } = await axios.post(url, body);
    return data;
  },
  edit: async (id, body) => {
    const { data } = await axios.put(`${url}/${id}`, body);
    return data;
  },

  delete: async (id) => {
    const { data } = await axios.delete(`${url}/${id}`);
    return data;
  },
};
