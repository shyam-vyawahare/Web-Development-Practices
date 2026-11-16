
/*
    Main Application
    Demonstrates different import techniques.
*/

// Import named exports
import {
    add,
    subtract,
    multiply,
    divide
} from "./math.js";

// Import default export
import square from "./math.js";

// Import with alias
import { add as sum } from "./math.js";

// Import user module
import {
    user,
    getUserDetails,
    getSkills
} from "./user.js";


const output = document.getElementById("output");

// 1. Mathematical operations
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));

// 2. Default export
console.log("Square:", square(6));

// 3. Import alias
console.log("Sum using alias:", sum(20, 30));

// 4. User information
console.log("User:", user);
console.log(getUserDetails());
console.log("Skills:", getSkills());

// 5. Display application output
output.textContent =
    `${getUserDetails()} Skills: ${getSkills()}`;
