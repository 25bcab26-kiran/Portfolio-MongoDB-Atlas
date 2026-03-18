const express = require("express")
const router = express.Router()
const Contact = require("../models/Contact")

// POST - Save contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body

    const newContact = new Contact({
      name,
      email,
      message
    })

    await newContact.save()

    // ✅ updated response
    res.status(201).json({ message: "Message saved successfully" })

  } catch (error) {
    res.status(500).json({ message: "Error saving data" })
  }
})

module.exports = router