const express = require("express");

const projectRouter = require("../projects/projectRouter");
const resourceRouter = require("../resources/resourceRouter");
const taskRouter = require("../tasks/taskRouter");

const server = express();

// global middleware
server.use(express.json());

// Routes
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

module.exports = server;
