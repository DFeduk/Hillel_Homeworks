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
  return arr.map(Number).filter(Number);
}

function getSum(operator) {
  arrayOfOperands.filter(Number);
  sum = arrayOfOperands[0];
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
let arrayOfOperands = getArrayOfOperands("Write down your operands");
let result = getSum(operator);
alert(`Your result : ${arrayOfOperands.join(operator)} = ${result}`);
