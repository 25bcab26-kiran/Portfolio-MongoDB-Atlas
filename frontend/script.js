document.querySelector("button").addEventListener("click", async () => {

  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const messageInput = document.getElementById("message")

  const name = nameInput.value
  const email = emailInput.value
  const message = messageInput.value

  if (!name || !email || !message) {
    alert("Please fill all fields")
    return
  }

  try {
    const res = await fetch("https://portfolio-mongodb-atlas.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })

    const data = await res.json()
    alert(data.message)

    nameInput.value = ""
    emailInput.value = ""
    messageInput.value = ""

  } catch (err) {
    alert("Error sending message")
  }

})