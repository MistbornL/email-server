const { Schema, model } = require("../db/connection");

const Message = new Schema({
  author: { type: String, required: true },
  receiver: { type: String, required: true },
  title: { type: String, default: "Message" },
  content: { type: String, required: true },
});

module.exports = model("message", Message);
