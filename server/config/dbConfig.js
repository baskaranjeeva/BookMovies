const mongoose = require("mongoose");

const dbString =
  "mongodb+srv://BaskaranJeeva:QLbiWgwNCHxrkA0r@cluster0.04alcff.mongodb.net/BMS?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbString);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection Successfull");
});

connection.on("error", () => {
  console.log("Connection Unsuccessfully");
});
