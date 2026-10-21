
/*
    JavaScript Closures and Higher-Order Functions
    Topics: closures, lexical scope, callbacks,
    function factories, and function composition
*/

// 1. Basic Closure
console.log("1. Basic Closure:");

function outerFunction() {
    const message = "Hello from the outer function!";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

const greet = outerFunction();
greet(); // The inner function still accesses message


// 2. Private Counter Using a Closure
console.log("\n2. Private Counter:");

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const anotherCounter = createCounter();

console.log(anotherCounter()); // 1 — independent state


// 3. Function Factory
console.log("\n3. Function Factory:");

function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30


// 4. Higher-Order Function
console.log("\n4. Higher-Order Function:");

function calculate(a, b, operation) {
    return operation(a, b);
}

const addition = (a, b) => a + b;
const multiplication = (a, b) => a * b;

console.log(calculate(10, 5, addition));       // 15
console.log(calculate(10, 5, multiplication)); // 50


// 5. Functions That Return Functions
console.log("\n5. Returning Functions:");

function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting("Hello");
const sayWelcome = createGreeting("Welcome");

console.log(sayHello("Ultrex"));
console.log(sayWelcome("Ultrex"));


// 6. Custom Array Transformation
console.log("\n6. Custom Map Function:");

function customMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];

const squares = customMap(numbers, (number) => number ** 2);

console.log("Squares:", squares);


// 7. Custom Filter Function
console.log("\n7. Custom Filter Function:");

function customFilter(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

const evenNumbers = customFilter(numbers, (number) => number % 2 === 0);

console.log("Even Numbers:", evenNumbers);


// 8. Function Composition
console.log("\n8. Function Composition:");

const doubleNumber = (number) => number * 2;
const addFive = (number) => number + 5;

function compose(outer, inner) {
    return function (value) {
        return outer(inner(value));
    };
}

const doubleAfterAddingFive = compose(doubleNumber, addFive);

console.log(doubleAfterAddingFive(10)); // 30


// 9. Closure for Configuration
console.log("\n9. Configurable Logger:");

function createLogger(prefix) {
    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

infoLogger("Application started.");
errorLogger("Something went wrong.");


// 10. Practical Example — Bank Account
console.log("\n10. Private Bank Account:");

function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            if (!Number.isFinite(amount) || amount <= 0) {
                throw new Error("Deposit must be a positive number.");
            }

            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (!Number.isFinite(amount) || amount <= 0) {
                throw new Error("Withdrawal must be a positive number.");
            }

            if (amount > balance) {
                throw new Error("Insufficient balance.");
            }

            balance -= amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

console.log("Initial:", account.getBalance());
console.log("After deposit:", account.deposit(500));
console.log("After withdrawal:", account.withdraw(200));

// balance is private and cannot be accessed directly.
console.log("Final:", account.getBalance());
