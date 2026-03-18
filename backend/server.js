const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectMongo = require("./config/mongo")

const app = express()

app.use(cors())
app.use(express.json())

connectMongo()

const contactRoutes = require("./routes/contactRoutes")
app.use("/api/contact", contactRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})