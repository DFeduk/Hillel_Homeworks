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
  return arr.split(",");
}

function getArrayOfNumbers(arrayOfOperands) {
  let number = arrayOfOperands.map(Number);
  for (let i = number.length - 1; i >= 0; i--) {
    if (isNaN(number[i])) {
      number.splice(i, 1);
    }
  }
  return number;
}

function getResult(operator) {
  sum = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    switch (operator) {
      case "+":
        sum = sum + arrayOfNumbers[i];
        break;
      case "-":
        sum = sum - arrayOfNumbers[i];
        break;
      case "*":
        sum = sum * arrayOfNumbers[i];
        break;
      case "/":
        sum = sum / arrayOfNumbers[i];
        break;
    }
  }
  return sum;
}

const operator = getOperator();
const arrayOfOperands = getArrayOfOperands("Write down your operands");
const arrayOfNumbers = getArrayOfNumbers(arrayOfOperands);
let result = getResult(operator);
alert(`Your result : ${arrayOfNumbers.join(operator)} = ${result}`);
