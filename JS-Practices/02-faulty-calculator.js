/*
    Practice: Faulty Calculator

    The calculator should perform normal operations
    90% of the time.

    10% of the time, it should perform:
        + → -
        * → +
        - → /
        / → **
*/

// Take numbers as input
let a = Number(prompt("Enter your first number: "));
let b = Number(prompt("Enter your second number: "));

// Generate random number between 0 and 1
let random = Math.random();

if (random < 0.1) {
    // Faulty calculation
    console.log("⚠️ Faulty calculation activated!");

    console.log("Addition:", a - b);
    console.log("Multiplication:", a + b);
    console.log("Subtraction:", a / b);
    console.log("Division:", a ** b);
} else {
    // Correct calculation
    console.log("✅ Normal calculation");

    console.log("Addition:", a + b);
    console.log("Multiplication:", a * b);
    console.log("Subtraction:", a - b);
    console.log("Division:", a / b);
}
