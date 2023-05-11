const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174",
  })
);

mongoose.connect(
  "mongodb+srv://booking:J6JNNXnHhcXtLn1Z@cluster0.ur9nhzn.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json({ name, email, password });
});

app.listen(8080);
