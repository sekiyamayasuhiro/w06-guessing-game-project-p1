// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

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
