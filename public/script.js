const button = document.getElementById("button")
const input = document.getElementById("input")
const form = document.getElementById("form")
const error = document.getElementById("error")

form.addEventListener("submit", (e) => {
  let errorMessages = []
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (input.value === "" || input.value == null) {
    errorMessages.push("Email required")
  }
  if (!input.value.match(pattern)) {
    errorMessages.push("Please provide a valid email")
    error.classList.add("text-red-400")
  }
  if (errorMessages.length > 0) {
    e.preventDefault()
    error.innerHTML = errorMessages.join(", ")
  }
})
