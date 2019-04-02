const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const configureRoutes = require("./routes");

configureRoutes(app);

app.listen(8000, error => {
  if (error) throw error;
  console.log("Server running on port " + 8000);
});
