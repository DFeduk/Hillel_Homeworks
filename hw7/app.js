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
  let arr = "";
  do {
    arr = prompt(string);
  } while (arr === null || arr === "");
  arr = arr.split(",");
  return arr.map(Number).filter(
    Number.isFinite &&
      function (operand) {
        return operand % 2 !== 0 ? true : false;
      }
  );
}

function getSum(operator) {
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
let arrayOfOperands = getArrayOfOperands("Write down your operands");
let result = getSum(operator);
alert(`Your result : ${arrayOfOperands.join(operator)} = ${result}`);
