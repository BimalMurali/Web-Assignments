// Generate a random secret number between 1 and 100
var secretNumber = Math.floor(Math.random() * 100) + 1;
        
// Initialize variables for tracking guesses and attempts
var guesses = [];
var attempts = 0;

// Function to play the game
function playGame() {
    var guess = parseInt(prompt("Enter your guess (between 1 and 100):"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        playGame(); // Recursive call to continue the game
        return;
    }

    attempts++;
    guesses.push(guess);

    if (guess === secretNumber) {
        alert("Congratulations! You guessed the secret number in " + attempts + " attempts.");
    } else if (guess < secretNumber) {
        alert("Too low! Try again.");
        playGame(); // Recursive call to continue the game
    } else {
        alert("Too high! Try again.");
        playGame(); // Recursive call to continue the game
    }
}

// Start the game
playGame();

// Display guesses and attempts at the end
document.write("<h2>Game Over</h2>");
document.write("<p>Secret number was: " + secretNumber + "</p>");
document.write("<p>Your guesses: " + guesses.join(", ") + "</p>");
document.write("<p>Number of attempts: " + attempts + "</p>");