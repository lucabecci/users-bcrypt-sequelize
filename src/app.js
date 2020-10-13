const express = require("express");
const morgan = require("morgan");
//initializations
const app = express();
//importing routes
const userRoutes = require("./routes/user.routes");
const taskRoutes = require("./routes/task.routes");
//middlewares
app.use(morgan("dev"));
app.use(express.json());
//routes
app.use("/user", userRoutes);
app.use("/tasks", taskRoutes);

module.exports = app;
