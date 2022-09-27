const { Schema, model } = require("../db/connection");

const User = new Schema({
  userName: { type: String, required: true, unique: true },
});

module.exports = model("user", User);
