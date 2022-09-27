const { Schema, model } = require("../db/connection");

const UserSchema = new Schema({
  userName: { type: String, required: true, unique: true },
});

// User model
const User = model("User", UserSchema);

module.exports = User;
