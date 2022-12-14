const { Schema, model } = require("../db/connection");

const MessageSchema = new Schema({
  author: { type: String, required: true },
  receiver: { type: String, required: true },
  title: { type: String, default: "Message" },
  content: { type: String, required: true },
});

const Message = model("Message", MessageSchema);

module.exports = Message;
