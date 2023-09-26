const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: Schema.Types.ObjectId, ref: "Planet" },
  films: [{ type: Schema.Types.ObjectId, ref: "Film" }],
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

characterSchema.statics.edit = async function (id, data) {
  return await this.updateOne({ _id: id }, data);
};

characterSchema.statics.deleted = async function (id) {
  return await this.deleteOne({ _id: id });
};

module.exports = characterSchema;
