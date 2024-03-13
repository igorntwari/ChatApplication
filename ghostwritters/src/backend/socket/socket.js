import { Server } from "socket.io";
import http from "http";
import { express } from "express";

const app = require(express);

const server = http.createServer(app);
const io = new Server(server, {
  cors: ["http://localhost:3000"],
  methods: ["GET", "POST"],
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
});

io.on("disconnected", (socket) => {
  console.log("a user was disconnected", socket.id);
});

export { app, io, server };
