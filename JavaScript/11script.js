// number gussing game

let winningNumber = 9;
let userGuess = +prompt("Guess a number");

// console.log(typeof userGuess, userGuess);

if (userGuess === winningNumber) {
    console.log("Win!!");
} else {
    if (userGuess < winningNumber) {
        console.log("Too low!!");
    } else {
        console.log("Too high!!");
    }
}
