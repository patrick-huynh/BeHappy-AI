const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();
app.use(express.json());

// db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error"));

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credientials: true }));

// routes
const testRoutes = require("./routes/test");
app.use("/", testRoutes);

//port
const port = process.env.PORT || 8000;

// listener
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
