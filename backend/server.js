const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectMongo = require("./config/mongo")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// DB connect
connectMongo()

// 👉 IMPORT ROUTES
const contactRoutes = require("./routes/contactRoutes")

// 👉 USE ROUTES
app.use("/api/contact", contactRoutes)

// 👉 HOME ROUTE (to avoid Not Found)
app.get("/", (req, res) => {
  res.send("Server running 🚀")
})

// 👉 PORT (IMPORTANT for Render)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})