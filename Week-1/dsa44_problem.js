let target = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

do {
  guess = Number(prompt("Guess a number between 1 and 100:"));
  attempts++;

  if (guess > target) {
    console.log("Too High!");
  } else if (guess < target) {
    console.log("Too Low!");
  } else if (guess === target) {
    console.log("🎉 Correct! You guessed in " + attempts + " attempts.");
  } else {
    console.log("Invalid input");
  }

} while (guess !== target);