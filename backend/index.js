const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { dbConnect } = require("./utils/dbConnect");
const uploadRouter = require("./routes/uploadRouter");

dotenv.config({ path: ".env.local" });
const PORT = process.env.PORT || 3000;

dbConnect();

app.use(express.json());
app.use("/api/v1", uploadRouter);

app.use("/", (req, res) => {
  res.json("Hey there!");
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
