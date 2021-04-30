let symbol;
let firstNumber;
let secondNumber;

function answer () {
    do {
        symbol = (prompt("Choose a Symbol (+ - / *)"))
    } while (symbol !== '*' && symbol !== '/' && symbol !== '+' && symbol !== '-')
}
answer()

function firstOperand () {
    do {
        firstNumber = prompt("What`s your first number?")
    } while (isNaN(firstNumber) || firstNumber === "")
}
firstOperand()

function secondOperand () {
    do {
        secondNumber = prompt("What`s your second number?")
    } while (isNaN(secondNumber) || secondNumber === "")
}
secondOperand()


secondNumber = +secondNumber
firstNumber = +firstNumber
if (symbol === "/") {
    alert(`${firstNumber} ${symbol} ${secondNumber} = ${firstNumber / secondNumber}`);
} else if (symbol === "*") {
    alert(`${firstNumber} ${symbol} ${secondNumber} = ${firstNumber * secondNumber}`);
} else if (symbol === "+") {
    alert(`${firstNumber} ${symbol} ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (symbol === "-") {
    alert(`${firstNumber} ${symbol} ${secondNumber} = ${firstNumber - secondNumber}`);
};