
/*
    JavaScript Event Loop Practice
    Topics: Call Stack, synchronous execution,
    setTimeout, Promises, Microtasks, and Macrotasks
*/

// 1. Synchronous Execution
console.log("1. Start");

function greet() {
    console.log("2. Inside greet()");
}

greet();

console.log("3. End");

// Output:
// 1. Start
// 2. Inside greet()
// 3. End


// 2. Understanding setTimeout()
console.log("\n4. Timer Example");

console.log("A");

setTimeout(() => {
    console.log("B - Timer callback");
}, 0);

console.log("C");

// Output:
// A
// C
// B - Timer callback


// 3. Promise Execution
console.log("\n5. Promise Example");

console.log("First");

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Second");

// Output:
// First
// Second
// Promise callback


// 4. Microtasks vs Timer Callbacks
console.log("\n6. Execution Order");

console.log("Start");

setTimeout(() => {
    console.log("Timer 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

queueMicrotask(() => {
    console.log("Microtask 2");
});

setTimeout(() => {
    console.log("Timer 2");
}, 0);

console.log("End");

// Expected order in browsers and modern Node.js:
// Start
// End
// Promise 1
// Microtask 2
// Timer 1
// Timer 2


// 5. Nested Microtasks
console.log("\n7. Nested Microtasks");

Promise.resolve().then(() => {
    console.log("Microtask A");

    Promise.resolve().then(() => {
        console.log("Microtask B");
    });
});

Promise.resolve().then(() => {
    console.log("Microtask C");
});

// Output:
// Microtask A
// Microtask C
// Microtask B


// 6. Async/Await Execution
console.log("\n8. Async/Await");

async function runTask() {
    console.log("Task 1");

    await Promise.resolve();

    console.log("Task 2");
}

console.log("Before function");

runTask();

console.log("After function");

// Output:
// Before function
// Task 1
// After function
// Task 2


// 7. Promise vs Timer
console.log("\n9. Promise vs Timer");

setTimeout(() => {
    console.log("Timeout executed");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise executed");
});

console.log("Synchronous code executed");

// Output:
// Synchronous code executed
// Promise executed
// Timeout executed


// 8. Call Stack Demonstration
console.log("\n10. Call Stack");

function first() {
    console.log("Inside first()");
    second();
    console.log("Back in first()");
}

function second() {
    console.log("Inside second()");
}

first();

// Output:
// Inside first()
// Inside second()
// Back in first()


// 9. Practical Example — Sequential Async Tasks
console.log("\n11. Async Task Sequence");

function delay(message, milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), milliseconds);
    });
}

async function executeTasks() {
    console.log("Task sequence started");

    const firstResult = await delay("First task completed", 1000);
    console.log(firstResult);

    const secondResult = await delay("Second task completed", 1000);
    console.log(secondResult);

    console.log("All tasks completed");
}

executeTasks();
