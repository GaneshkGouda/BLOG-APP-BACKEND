const express = require("express");
const cors = require("cors");
const blogRoute = require("./routs/blog-route.js");
const PORT = process.env.PORT || 5000;
require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRoute);

app.use("/app", (req, res) => {
  res.send("hello worls");
});
app.listen(PORT, () => console.log("runningr port 500"));
