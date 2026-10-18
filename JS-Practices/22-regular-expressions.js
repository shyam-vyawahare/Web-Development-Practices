
/*
    JavaScript Regular Expressions Practice
    Topics: test(), match(), matchAll(), replace(),
    search(), character classes, and validation
*/

// 1. Basic Pattern Matching
console.log("1. Basic Matching:");

const text = "I am learning JavaScript.";

const pattern = /JavaScript/;

console.log(pattern.test(text)); // true
console.log(/Python/.test(text)); // false


// 2. Case-Insensitive Matching
console.log("\n2. Case-Insensitive Matching:");

const message = "JavaScript is amazing.";

console.log(/javascript/i.test(message)); // true


// 3. Match All Numbers
console.log("\n3. Extracting Numbers:");

const sentence = "I have 3 books, 12 pens, and 250 rupees.";

const numbers = sentence.match(/\d+/g);

console.log(numbers); // ["3", "12", "250"]


// 4. Character Classes
console.log("\n4. Character Classes:");

console.log(/\d+/.test("Room 101")); // true: digits
console.log(/[a-z]+/i.test("HELLO")); // true: letters
console.log(/\s/.test("Hello World")); // true: whitespace
console.log(/^[A-Z]/.test("Ultrex")); // true: starts with uppercase


// 5. Quantifiers
console.log("\n5. Quantifiers:");

console.log(/a*/.test("bbb")); // true: zero or more
console.log(/a+/.test("bbb")); // false: one or more
console.log(/\d{4}/.test("Year 2026")); // true: four consecutive digits


// 6. Validate a Basic Email Format
console.log("\n6. Email Validation:");

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid-email")); // false


// 7. Validate a 10-Digit Indian Mobile Number
console.log("\n7. Mobile Number Validation:");

function isValidIndianMobile(number) {
    return /^[6-9]\d{9}$/.test(number);
}

console.log(isValidIndianMobile("9876543210")); // true
console.log(isValidIndianMobile("1234567890")); // false


// 8. Find and Replace Text
console.log("\n8. Replace:");

const sentence2 = "JavaScript is fun. JavaScript is powerful.";

console.log(sentence2.replace(/JavaScript/g, "JS"));


// 9. Search for a Pattern's Position
console.log("\n9. Search:");

const result = "Learn HTML, CSS, and JavaScript".search(/CSS/);

console.log("CSS starts at index:", result);


// 10. Capture Groups
console.log("\n10. Capture Groups:");

const date = "2026-10-18";
const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;

const dateMatch = date.match(datePattern);

if (dateMatch) {
    const [, year, month, day] = dateMatch;

    console.log("Year:", year);
    console.log("Month:", month);
    console.log("Day:", day);
}


// 11. Extract All Matches with matchAll()
console.log("\n11. matchAll():");

const codes = "Order A123, Order B456, Order C789";

for (const match of codes.matchAll(/[A-Z]\d+/g)) {
    console.log(match[0]);
}


// 12. Remove Extra Whitespace
console.log("\n12. Clean Text:");

const messyText = "   JavaScript    is   awesome!   ";

const cleanText = messyText.trim().replace(/\s+/g, " ");

console.log(cleanText);


// 13. Validate a Password's Basic Requirements
console.log("\n13. Password Validation:");

function validatePassword(password) {
    const errors = [];

    if (password.length < 8) {
        errors.push("Must contain at least 8 characters.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Must contain a lowercase letter.");
    }

    if (!/\d/.test(password)) {
        errors.push("Must contain a number.");
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Must contain a special character.");
    }

    return errors;
}

console.log(validatePassword("Hello123!"));
console.log(validatePassword("hello"));
