
import welcome, { greet, farewell } from "./greetings.js";

import { add, subtract, multiply, divide, PI } from "./math.js";

console.log(welcome());

console.log(greet("Ultrex"));
console.log(farewell("Ultrex"));

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));

console.log("Value of PI:", PI);
