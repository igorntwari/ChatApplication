import {app,server} from './socket/socket'
const express = require("express");

const mongoose = require("mongoose");
const User = require("./models/user.model");
const Messages = require("./models/message.model");
const connectDB = require("./db/connectDB");
const Conversation = require("./models/conversation.model");
const authRouter = require("./auth/authRoutes");
const cors = require('cors')

require("dotenv").config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Auth
app.use("/auth", authRouter);

app.get("/allusers",  (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });

});

app.get("/messages/:sender/:receiver", async (req, res) => {
  const sender = req.params.sender;
  const receiver = req.params.receiver;
  const currentConv = await Conversation.findOne({
    participants: {
      $all: [sender, receiver],
    },
  }).populate('messages');

  res.status(200).json(currentConv);
});


app.post("/messages/:id", async (req, res) => {
  try {
    const sender = req.body.sender;
    const receiver = req.params.id;
    const message = req.body.message;
    console.log(sender, receiver, message);

    let conversation = await Conversation.findOne({
      participants: {
        $all: [sender, receiver],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [sender, receiver],
      });
    }

    const new_Message = await Messages.create({
      message,
      senderId: sender,
      recieverId: receiver,
    });

    if (new_Message) {
      conversation.messages.push(new_Message._id);
      conversation.save()
    }
    res.status(201).send(new_Message);
  } catch (error) {
    res.status(501).send(error);
  }
});

server.listen(4000, () => {
  connectDB();
  console.log("Server is running on port 4000");
});
