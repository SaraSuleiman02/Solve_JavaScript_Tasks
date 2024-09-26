const words = [
  {
    word: "javascript",
    category: "Programming",
    hints: [
      "It's a scripting language.",
      "Used mainly for web development.",
      "Can be used on both client and server side.",
    ],
  },
  {
    word: "python",
    category: "Programming",
    hints: [
      "It's a popular language.",
      "Known for its simplicity.",
      "Commonly used in AI and web development.",
    ],
  },
  {
    word: "html",
    category: "Programming",
    hints: [
      "It's a markup language.",
      "Used to structure web pages.",
      "Works with CSS and JavaScript.",
    ],
  },
  {
    word: "css",
    category: "Programming",
    hints: [
      "It's used for styling websites.",
      "Works alongside HTML.",
      "Defines the layout and design.",
    ],
  },
  {
    word: "react",
    category: "Programming",
    hints: [
      "It's a JavaScript library.",
      "Used for building user interfaces.",
      "Created by Facebook.",
    ],
  },
  {
    word: "angular",
    category: "Programming",
    hints: [
      "It's a JavaScript framework.",
      "Maintained by Google.",
      "Used for building web apps.",
    ],
  },
  {
    word: "nodejs",
    category: "Programming",
    hints: [
      "It's a JavaScript runtime.",
      "Built on Chrome's V8 engine.",
      "Used for server-side programming.",
    ],
  },
  {
    word: "java",
    category: "Programming",
    hints: [
      "It's an object-oriented language.",
      "Used in Android development.",
      "Runs on the JVM.",
    ],
  },
  {
    word: "sql",
    category: "Programming",
    hints: [
      "It's used to interact with databases.",
      "Stands for Structured Query Language.",
      "Used in relational databases.",
    ],
  },
  {
    word: "mongodb",
    category: "Programming",
    hints: [
      "It's a NoSQL database.",
      "Uses JSON-like documents.",
      "Popular for its flexibility with data.",
    ],
  },
  {
    word: "git",
    category: "Programming",
    hints: [
      "It's a version control system.",
      "Helps developers track code changes.",
      "Commonly used with GitHub.",
    ],
  },
  {
    word: "bootstrap",
    category: "Programming",
    hints: [
      "It's a CSS framework.",
      "Helps with responsive design.",
      "Developed by Twitter.",
    ],
  },
];

let selectedWordObj = words[Math.floor(Math.random() * words.length)];
let selectedWord = selectedWordObj.word;
let guessedLetters = [];
let wrongGuesses = 0;
let hintIndex = 0;
const maxGuesses = 6;

// DOM elements
const wordDisplay = document.getElementById("wordDisplay");
const letterInput = document.getElementById("letterInput");
const wrongCounter = document.getElementById("wrongCounter");
const hintArea = document.getElementById("hintArea");
const canvas = document.getElementById("hangmanCanvas");
const ctx = canvas.getContext("2d");

// Display word dashes
function displayWord() {
  wordDisplay.innerHTML = selectedWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
}

// Update wrong counter
function updateWrongCounter() {
  wrongCounter.innerText = `Wrong guesses: ${wrongGuesses} / ${maxGuesses}`;
}

// Display hint
function showHint() {
  if (hintIndex < selectedWordObj.hints.length) {
    hintArea.innerText = `Hint: ${selectedWordObj.hints[hintIndex]}`;
    hintIndex++;
  }
}

// Draw hangman
function drawHangman() {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#000";

  // Already drawn lines (the base and pole structure)
  ctx.moveTo(50, 280);
  ctx.lineTo(150, 280);
  ctx.moveTo(100, 280);
  ctx.lineTo(100, 50);
  ctx.moveTo(100, 50);
  ctx.lineTo(150, 50);
  ctx.moveTo(150, 50);
  ctx.lineTo(150, 80);
  ctx.stroke();

  // The rest of the hangman is drawn progressively
  switch (wrongGuesses) {
    case 1:
      ctx.moveTo(150, 80);
      ctx.arc(150, 100, 20, 0, Math.PI * 2, true); // Head
      break;
    case 2:
      ctx.moveTo(150, 120);
      ctx.lineTo(150, 200); // Body
      break;
    case 3:
      ctx.moveTo(150, 140);
      ctx.lineTo(120, 170); // Left arm
      break;
    case 4:
      ctx.moveTo(150, 140);
      ctx.lineTo(180, 170); // Right arm
      break;
    case 5:
      ctx.moveTo(150, 200);
      ctx.lineTo(120, 240); // Left leg
      break;
    case 6:
      ctx.moveTo(150, 200);
      ctx.lineTo(180, 240); // Right leg
      break;
  }
  ctx.stroke();
}

// Check if letter is correct
function checkLetter(letter) {
  if (selectedWord.includes(letter)) {
    guessedLetters.push(letter);
  } else {
    wrongGuesses++;
    updateWrongCounter();
    drawHangman();
    showHint();
  }
  displayWord();

  // Check for win or lose condition
  if (!wordDisplay.innerText.includes("_")) {
    alert("Congratulations! You've won!");
    letterInput.disabled = true;
  } else if (wrongGuesses === maxGuesses) {
    alert(`Game over! The word was: ${selectedWord}`);
    letterInput.disabled = true;
  }
}

// Event listener for letter input
letterInput.addEventListener("input", () => {
  const letter = letterInput.value.toLowerCase();
  if (letter && !guessedLetters.includes(letter) && wrongGuesses < maxGuesses) {
    checkLetter(letter);
  }
  letterInput.value = ""; // Clear input field
});

// Initialize game
displayWord();
updateWrongCounter();
