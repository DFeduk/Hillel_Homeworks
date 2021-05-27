function createCalculator(number) {
  return {
    sum: (value) => (number += value),
    mult: (value) => (number *= value),
    sub: (value) => (number -= value),
    div: (value) => (number /= value),
    set: (value) => (number = value),
  };
}

const calc = createCalculator(10);
console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));
