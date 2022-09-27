const Message = require("../models/message");
const User = require("../models/user");
const { Router } = require("express");

const router = Router();

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { username } = req.body;
    console.log(username);
    const candidate = await User.findOne({ username });
    if (candidate) return res.json(candidate);
    const user = new User({ username });
    await user.save();
    return res.json({ user: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

router.post("/sendMessage", async (req, res) => {
  try {
    const message = await Message.create(req.body);
    await message.save();
    res.json(message);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

router.get("/messages", async (req, res) => {
  try {
    const author = req.params.author;
    const messages = await Message.find();
    const messagesForFront = messages.map((message) => {
      if (message.author === author) {
        return {
          id: message._id,
          author: message.author,
          title: message.title,
          content: message.content,
        };
      }
      res.status(200).json(messagesForFront);
    });
  } catch (e) {
    res.status(400).json({ message: "Something went wrong, try again." });
  }
});

module.exports = router;
