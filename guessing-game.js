const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = 3;

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

function askGuess(guess) {
    rl.question("Enter a guess: ", guess => {
        let numGuess = Number(guess);
        // checkGuess(numGuess);
        if (checkGuess(numGuess)) {
            console.log("You win!");
            rl.close();
        }
        else {
            return askGuess();
        };
    })

}
// Define a function named askGuess. The method should use the readline module's
// question method to ask the user to 'Enter a guess: '. If you need a refresher
// on how to use this method, check out the question docs. Once the user enters
// their number, the checkGuess function should be called with their number as an
// argument and the interface should be closed. When the user enters their guess
// it will be interpreted as a string of numeric characters and not an actual number type!

// console.log(checkGuess());
askGuess()
