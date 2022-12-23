const express = require("express"); // express
const cors = require("cors");
const fs = require('fs')
const path = require('path')
const router = require("./Router/ApiSetGET");


const app = express();
const Port = process.env.Port || 4545;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);
app.use(express.static(path.join(__dirname, '../dist')));

app
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', "index.html"))
  })
  .listen(Port, err => {
    if (err) throw err;
    console.log(`server Start ${Port}`);
  });
