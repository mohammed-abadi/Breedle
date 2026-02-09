const keyboard = document.getElementById("keyboard")

// const letters = "abcdefghijklmnopqrstuvwxyz"
const letters = "qwertyuiopasdfghjklzxcvbnm"

letters.split("").forEach((letter) => {
  const key = document.createElement("button")
  key.textContent = letter.toUpperCase()
  key.classList.add("key")
  keyboard.appendChild(key)
})
// disable the button and instead of making a div or whatever having this is more convenient
const key = document.getElementById("keyboard")
key.setAttribute = "disabled"
key.style.pointerEvents = "none"

const input = document.getElementById("guess-input")
const submit = document.getElementById("sBtn")
let currentGuess = 1
const maxGuesses = 6
const count = document.getElementById("guess-count")
function updateGuessDisplay() {
  if (currentGuess < 6) {
    currentGuess++
    count.textContent = currentGuess + " / " + maxGuesses
  } else if (currentGuess <= 6) {
    alert("Game Over")
    location.reload()
  }
}

submit.addEventListener("click", () => {
  const guess = input.value.toLowerCase()
  if (guess === randomWord) {
    alert("Congratulations! You've guessed the word!")
  } else {
    alert("Wrong guess! Try again.")
    updateGuessDisplay()
  }
  console.log(guess)
  input.value = ""
})

// make an array of words and then randomly select one for the user to guess
const words = ["javascript", "hangman", "programming", "developer", "algorithm"]
const randomWord = words[Math.floor(Math.random() * words.length)]
console.log(randomWord) // for testing purposes
