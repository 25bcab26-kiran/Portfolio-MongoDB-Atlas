const mongoose = require("mongoose")

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)

    console.log("✅ MongoDB Atlas Connected")
  } catch (error) {
    console.error("❌ DB Error:", error.message)
    process.exit(1)
  }
}

module.exports = connectMongo