const express = require("express");
const connectToDatabase = require("./db/connect");
require("dotenv").config();
const authRouter = require("./routes/authRoute");
const app = express();

app.use("/api/v1/auth", authRouter);

const port = process.env.port || 5000;
const start = async () => {
  try {
    await connectToDatabase(process.env.MONGO_URL);
    app.listen(port, () => console.log(`server listening on port: ${port}`));
  } catch (err) {
    console.log(err);
  }
};
start();
