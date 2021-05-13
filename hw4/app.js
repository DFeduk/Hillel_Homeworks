let arrayOfOperands = [];
function getOperator() {
  let symbol;
  do {
    symbol = prompt("Choose a symbol (+ - / *)");
  } while (isOperatorValid(symbol));
  return symbol;
}

function isOperatorValid(symbol) {
  return symbol !== "*" && symbol !== "/" && symbol !== "+" && symbol !== "-";
}

function getNumberOfOperands(string) {
  let operand = "";
  do {
    operand = prompt(string);
  } while (isNumberValid(operand));
  return +operand;
}

function isNumberValid(operand) {
  return isNaN(operand) || operand === null || operand < 2 || operand > 5;
}

function getOperands(value) {
  let result;
  for (let i = 1; i <= value; i++) {
    do {
      result = prompt("Enter your operand");
    } while (isOperandsValid(result));
    arrayOfOperands.push(+result);
  }
}

function isOperandsValid(result) {
  return isNaN(result) || result === "";
}

function getSum(operator) {
  let sum = arrayOfOperands[0];
  for (let i = 1; i < arrayOfOperands.length; i++) {
    switch (operator) {
      case "+":
        sum = sum + arrayOfOperands[i];
        break;
      case "-":
        sum = sum - arrayOfOperands[i];
        break;
      case "*":
        sum = sum * arrayOfOperands[i];
        break;
      case "/":
        sum = sum / arrayOfOperands[i];
        break;
    }
  }
  return sum;
}

const operator = getOperator();
const value = getNumberOfOperands(
  "How many operands do you want?(Choose between 2 and 5)"
);
const operands = getOperands(value);
const summary = getSum(operator);

alert(`Your result : ${arrayOfOperands.join(operator)} = ${summary}`);
