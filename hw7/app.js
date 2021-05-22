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
    arr = prompt(string).split(",");
  } while (!isOperandValid(arr));
  return arr
    .map(Number)
    .filter((operand) => isFinite(operand) && operand % 2 !== 0);
}

function isOperandValid(num) {
  return num !== null && num !== "";
}

function getCalculation(operator, arrayOfOperands) {
  let value = arrayOfOperands[0];
  for (let i = 1; i < arrayOfOperands.length; i++) {
    switch (operator) {
      case "+":
        value = value + arrayOfOperands[i];
        break;
      case "-":
        value = value - arrayOfOperands[i];
        break;
      case "*":
        value = value * arrayOfOperands[i];
        break;
      case "/":
        value = value / arrayOfOperands[i];
        break;
    }
  }
  return value;
}

const operator = getOperator();
const arrayOfOperands = getArrayOfOperands(
  "Write down your operands(separate them by commas)"
);
const result = getCalculation(operator, arrayOfOperands);
alert(`Your result : ${arrayOfOperands.join(operator)} = ${result}`);
