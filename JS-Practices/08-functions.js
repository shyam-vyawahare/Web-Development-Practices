/*
    JavaScript Functions Practice

    Concepts covered:
    - Function declaration
    - Parameters and arguments
    - Return values
    - Default parameters
    - Function expressions
    - Arrow functions
    - Callback functions
    - Higher-order functions
    - Rest parameters
*/


// ==========================================
// 1. FUNCTION DECLARATION
// ==========================================

function greet() {
    console.log("Hello, Web Developer!");
}

greet();


// ==========================================
// 2. PARAMETERS AND ARGUMENTS
// ==========================================

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Shyam");


// Multiple parameters

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log("\nAddition:", result);


// ==========================================
// 3. RETURN VALUE
// ==========================================

function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(10, 5);

console.log("\nArea:", area);


// ==========================================
// 4. DEFAULT PARAMETERS
// ==========================================

function introduce(name, role = "Developer") {
    return `I am ${name}, and I am a ${role}.`;
}

console.log("\nDefault parameter:");
console.log(introduce("Shyam"));

console.log(introduce("Shyam", "Frontend Developer"));


// ==========================================
// 5. FUNCTION EXPRESSION
// ==========================================

let multiply = function (a, b) {
    return a * b;
};

console.log("\nFunction expression:");
console.log(multiply(5, 4));


// ==========================================
// 6. ARROW FUNCTION
// ==========================================

let subtract = (a, b) => {
    return a - b;
};

console.log("\nArrow function:");
console.log(subtract(20, 8));


// Short arrow function

let square = number => number * number;

console.log("\nSquare:");
console.log(square(6));


// ==========================================
// 7. FUNCTION WITH ARRAY
// ==========================================

function calculateTotal(numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

let prices = [100, 250, 50, 300];

console.log("\nTotal price:");
console.log(calculateTotal(prices));


// ==========================================
// 8. REST PARAMETERS
// ==========================================

function sumAll(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log("\nRest parameters:");
console.log(sumAll(10, 20, 30));

console.log(sumAll(5, 10, 15, 20, 25));


// ==========================================
// 9. CALLBACK FUNCTION
// ==========================================

function processNumber(number, operation) {
    return operation(number);
}

function double(number) {
    return number * 2;
}

let processed = processNumber(10, double);

console.log("\nCallback function:");
console.log(processed);


// Using an arrow function as callback

let result2 = processNumber(5, number => number ** 2);

console.log("Square using callback:");
console.log(result2);


// ==========================================
// 10. HIGHER-ORDER FUNCTION
// ==========================================

// A function that accepts another function
// or returns another function is a higher-order function.

function calculate(a, b, operation) {
    return operation(a, b);
}

let addition = calculate(10, 5, (a, b) => a + b);

let multiplication = calculate(10, 5, (a, b) => a * b);

console.log("\nHigher-order function:");
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);


// ==========================================
// 11. PRACTICAL EXAMPLE
// ==========================================

function createUser(name, age, role = "Developer") {
    return {
        name: name,
        age: age,
        role: role
    };
}

let user = createUser("Shyam", 22, "Full Stack Developer");

console.log("\nCreated user:");
console.log(user);
