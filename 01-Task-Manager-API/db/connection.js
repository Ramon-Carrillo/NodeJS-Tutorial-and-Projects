const mongoose = require("mongoose");

const connectDB = async (URI) => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
