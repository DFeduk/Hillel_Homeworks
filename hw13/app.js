function Calculator(el) {
  this.result = el;
  this.sum = (value) => (this.result += value);
  this.mult = (value) => (this.result *= value);
  this.sub = (value) => (this.result -= value);
  this.div = (value) => (this.result /= value);
}

const calc = new Calculator(10);
console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.result);
