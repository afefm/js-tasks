'use strict';

// ** min two numbers **
function min(a, b) {
  if (a < b) {
    return `the min number between ${a} and ${b} is ${a}`;
  } else if (a > b) {
    return `the min number between ${a} and ${b} is ${b}`;
  } else {
    return `${a} and ${b} are equals`;
  }
}
console.log(min(5, 8));
console.log(min(120, 38));
console.log(min(4, 4));
