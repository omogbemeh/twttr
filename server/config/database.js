const mongoose = require("mongoose");
require("dotenv").config();

async function connectMongo() {
  mongoose.connection.once("open", () => console.log("Mongo is running"));
  mongoose.connection.on("error", (error) => console.log({ error }));
  await mongoose.connect(process.env.MONGO_URL);
}

connectMongo();
