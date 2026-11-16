
/*
    Math Module
    Demonstrates named exports and default export.
*/

// Named exports
export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
};

// Default export
export default function square(number) {
    return number ** 2;
}
