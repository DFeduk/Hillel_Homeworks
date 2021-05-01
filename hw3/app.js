let symbol;
let firstValue;
let secondValue;
function answer() {
  do {
    symbol = prompt("Choose a Symbol (+ - / *)");
  } while (
    symbol !== "*" &&
    symbol !== "/" &&
    symbol !== "+" &&
    symbol !== "-"
  );
}
answer();

function firstOperand() {
  do {
    firstValue = prompt("What`s your first number?");
  } while (isNaN(firstValue) || firstValue === "");
}
firstOperand();

function secondOperand() {
  do {
    secondValue = prompt("What`s your second number?");
  } while (isNaN(secondValue) || secondValue === "");
}
secondOperand();

let calculation = `${firstValue} ${symbol} ${secondValue} = `;
secondValue = +secondValue;
firstValue = +firstValue;

switch (symbol) {
  case "/":
    result = `${calculation}${firstValue / secondValue}`;
    break;
  case "*":
    result = `${calculation}${firstValue * secondValue}`;
    break;
  case "+":
    result = `${calculation}${firstValue + secondValue}`;
    break;
  case "-":
    result = `${calculation}${firstValue - secondValue}`;
    break;
}
alert(result);