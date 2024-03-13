const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { userName, password } = req.body;
  const currentUser = await User.create({ userName, password });
  return res.status(201).json(currentUser);
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  const currentUser = await User.findOne({ userName });
  //check if password is correct
  if (currentUser.password === password) {
    return res.status(201).json(currentUser);
  }

  return res.status(401).json({ error: "unauthorized" });
});

module.exports = router;
