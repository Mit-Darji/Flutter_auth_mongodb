const express = require("express");
const bodyParser = require("body-parser")
const userRouter = require("./routers/user_router")
const app = express();
app.use(bodyParser.json());
app.use("/", userRouter);
module.exports = app;