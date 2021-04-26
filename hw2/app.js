const symbol = prompt("What`s your symbol?");
const firstNumber = Number(prompt("What`s your first number?"));
const secondNumber = Number(prompt("What`s your second number?"));

if (symbol == "/") {
    alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
} else if (symbol == "*") {
    alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if (symbol == "+") {
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (symbol == "-") {
    alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
};
