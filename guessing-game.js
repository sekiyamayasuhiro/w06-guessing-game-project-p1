const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const secretNumber = randomInRange(0, 100);

// Define a function named checkGuess that accepts a number as an argument. It should compare that argument against the global secretNumber. It should have the following behavior:
const checkGuess = num => {
// when the argument is larger than secretNumber, it should print 'Too high.' and return false
    if (num > secretNumber) {
        console.log("Too High!");
        return false;
    };
// when the argument is smaller than secretNumber, it should print 'Too low.' and return false
    if (num < secretNumber) {
        console.log("Too Low!");
        return false
    };
// when the argument is equal to secretNumber, it should print 'Correct!' and return true
    if (num === secretNumber) {
        console.log("Correct!");
        return true;
    }
};

function askGuess() {
    rl.question("Enter a guess: ", guess => {
        let numGuess = Number(guess);
        console.log(numGuess);
        if (checkGuess(numGuess)) {
            console.log("You win!");
            rl.close();
        }
        else {
            return askGuess();
        };
    })
}

askGuess()
