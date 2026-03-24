const express = require("express")
const router = express.Router()

// ✅ TEST ROUTE
router.get("/", (req, res) => {
  res.send("Contact API working ✅")
})

// ✅ POST route (your form)
router.post("/", (req, res) => {
  const { name, email, message } = req.body

  console.log("New Contact:", name, email, message)

  res.status(200).json({
    success: true,
    message: "Message received ✅"
  })
})

module.exports = router