function getOperator() {
  let symbol;
  do {
    symbol = prompt("Choose a symbol (+ - / *)");
  } while (!isOperatorValid(symbol));
  return symbol;
}

function isOperatorValid(symbol) {
  return symbol === "*" || symbol === "/" || symbol === "+" || symbol === "-";
}

function getArrayOfOperands(string) {
  let arr;
  do {
    arr = prompt(string);
  } while (!isOperandValid(arr));
  arr = arr.split(",");
  return arr
    .map(Number)
    .filter((operand) => isFinite(operand) && operand % 2 !== 0);
}

function isOperandValid(num) {
  return num !== null && num !== "";
}

function getCalculation(operator, arrayOfOperands) {
  let calculation;
  switch (operator) {
    case "+":
      calculation = arrayOfOperands.reduce((a, b) => a + b);
      break;
    case "-":
      calculation = arrayOfOperands.reduce((a, b) => a - b);
      break;
    case "*":
      calculation = arrayOfOperands.reduce((a, b) => a * b);
      break;
    case "/":
      calculation = arrayOfOperands.reduce((a, b) => a / b);
      break;
  }
  return calculation;
}

const operator = getOperator();
const arrayOfOperands = getArrayOfOperands(
  "Write down your operands(separate them by commas)"
);
const result = getCalculation(operator, arrayOfOperands);
alert(`Your result : ${arrayOfOperands.join(operator)} = ${result}`);
