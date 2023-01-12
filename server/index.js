const express = require("express")
const cors = require("cors")
const mongoose = require ("mongoose")
const app = express();


app.use(cors())
app.use(express.json())

mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGOOSE CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("MONGOOSE CONNECTION ERROR!!!!");
    console.log(err);
  });

app.listen(5000, console.log("Listening on port 5000"))