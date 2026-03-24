const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectMongo = require("./config/mongo")

const app = express()

app.use(cors({
  origin: "*"
}))
app.use(express.json())

connectMongo()

const contactRoutes = require("./routes/contactRoutes")
app.get("/", (req, res) => {
  res.send("Server is running 🚀")
})

// ✅ FIXED PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});