const {Server}  = require("socket.io");
const http  = require("http");
const express  = require("express");

const app = express()

const server = http.createServer(app);
const io = new Server(server, {
  cors: ["*"],
  methods: ["GET", "POST"],
});

const onlineUsers = {}

function getSocketId(userId){
  return onlineUsers[userId]
}

io.on("connection", (socket) => {
  const userId =socket.handshake.query.userId
  onlineUsers[userId] = socket.id
});



io.on("disconnected", (socket) => {
  console.log("a user was disconnected", socket.id);
});

module.exports = { app, io, server, getSocketId };
