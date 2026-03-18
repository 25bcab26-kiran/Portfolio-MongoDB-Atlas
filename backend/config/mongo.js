const mongoose = require("mongoose")

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB Connected")
  } catch (error) {
    console.log("DB Error:", error)
  }
}

module.exports = connectMongo