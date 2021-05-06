let symbol;
function getSymbol() {
  do {
    symbol = prompt("Choose a symbol (+ - / *)");
  } while (
    symbol !== "*" &&
    symbol !== "/" &&
    symbol !== "+" &&
    symbol !== "-"
  );
}
getSymbol();

function getOperand(string) {
  let operand;
  do {
    operand = prompt(string);
  } while (isNaN(operand) || operand === "");
  return +operand;
}

const firstValue = getOperand("What`s your first number?");
const secondValue = getOperand("What`s your second number?");

let calculation = `${firstValue} ${symbol} ${secondValue} = `;

function count() {
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
}
count();
