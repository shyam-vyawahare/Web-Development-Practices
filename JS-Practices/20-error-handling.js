
/*
    JavaScript Error Handling Practice
    Topics: try, catch, finally, throw,
    Error objects, and custom errors
*/

// 1. Basic try...catch
console.log("1. Basic Error Handling:");

try {
    console.log("Starting the operation...");
    throw new Error("Something went wrong!");
} catch (error) {
    console.log("Caught an error:", error.message);
}

console.log("Program continues running.");


// 2. Handling Different Errors
console.log("\n2. Handling Different Errors:");

try {
    const user = null;
    console.log(user.name);
} catch (error) {
    console.log("Error Type:", error.name);
    console.log("Error Message:", error.message);
}


// 3. Using finally
console.log("\n3. Finally Block:");

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }

        return a / b;
    } catch (error) {
        console.log("Calculation failed:", error.message);
        return null;
    } finally {
        console.log("Division operation completed.");
    }
}

console.log("Result:", divide(10, 2));
console.log("Result:", divide(10, 0));


// 4. Throwing Errors for Invalid Input
console.log("\n4. Input Validation:");

function calculateAge(birthYear) {
    if (!Number.isInteger(birthYear)) {
        throw new TypeError("Birth year must be an integer.");
    }

    const currentYear = new Date().getFullYear();

    if (birthYear < 1900 || birthYear > currentYear) {
        throw new RangeError("Birth year is outside the valid range.");
    }

    return currentYear - birthYear;
}

try {
    console.log("Age:", calculateAge(2004));
    console.log("Age:", calculateAge(2035));
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}


// 5. Creating a Custom Error
console.log("\n5. Custom Errors:");

class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}

function withdraw(balance, amount) {
    if (amount > balance) {
        throw new InsufficientBalanceError(
            "You do not have enough balance."
        );
    }

    return balance - amount;
}

try {
    console.log("Remaining:", withdraw(1000, 300));
    console.log("Remaining:", withdraw(1000, 1500));
} catch (error) {
    if (error instanceof InsufficientBalanceError) {
        console.log("Transaction rejected:", error.message);
    } else {
        console.log("Unexpected error:", error.message);
    }
}


// 6. Handling JSON Parsing Errors
console.log("\n6. JSON Error Handling:");

const jsonData = '{"name":"Ultrex","skill":"JavaScript"}';

try {
    const user = JSON.parse(jsonData);
    console.log("User:", user);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}


// 7. Safely Converting Input
console.log("\n7. Safe Number Conversion:");

function toNumber(value) {
    const number = Number(value);

    if (value.trim() === "" || !Number.isFinite(number)) {
        throw new TypeError("Please provide a valid number.");
    }

    return number;
}

try {
    console.log("Converted:", toNumber("42"));
    console.log("Converted:", toNumber("hello"));
} catch (error) {
    console.log(error.message);
}
