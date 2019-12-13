const express = require("express");

const projectRouter = require("../projects/projectRouter");

const server = express();

// global middleware
server.use(express.json());

// Routes
server.use("/api/projects", projectRouter);

module.exports = server;
