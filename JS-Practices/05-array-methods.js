/*
    JavaScript Array Methods Practice

    Concepts covered:
    - forEach()
    - map()
    - filter()
    - find()
    - includes()
    - indexOf()
    - sort()
    - reduce()
*/

// Sample data
let numbers = [10, 25, 5, 40, 15, 30];

console.log("Original Array:");
console.log(numbers);


// 1. forEach()
// Executes a function for every element

console.log("\nUsing forEach():");

numbers.forEach(function (number) {
    console.log(number);
});


// 2. map()
// Creates a NEW array by transforming every element

let doubled = numbers.map(function (number) {
    return number * 2;
});

console.log("\nDoubled Array:");
console.log(doubled);


// 3. filter()
// Creates a NEW array containing elements
// that satisfy a condition

let greaterThan20 = numbers.filter(function (number) {
    return number > 20;
});

console.log("\nNumbers greater than 20:");
console.log(greaterThan20);


// 4. find()
// Returns the FIRST element that satisfies a condition

let firstGreaterThan20 = numbers.find(function (number) {
    return number > 20;
});

console.log("\nFirst number greater than 20:");
console.log(firstGreaterThan20);


// 5. includes()
// Checks whether an element exists

console.log("\nDoes array include 25?");
console.log(numbers.includes(25));

console.log("Does array include 100?");
console.log(numbers.includes(100));


// 6. indexOf()
// Returns the index of an element

console.log("\nIndex of 40:");
console.log(numbers.indexOf(40));


// 7. sort()
// Sorts an array

let sortedNumbers = [...numbers].sort(function (a, b) {
    return a - b;
});

console.log("\nSorted Array:");
console.log(sortedNumbers);


// 8. reduce()
// Reduces the entire array to a single value

let total = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

console.log("\nTotal:");
console.log(total);


// Practical example
let prices = [499, 999, 1499, 299];

let discountedPrices = prices.map(function (price) {
    return price * 0.9;
});

console.log("\nPrices after 10% discount:");
console.log(discountedPrices);


// Practical filtering
let affordableProducts = prices.filter(function (price) {
    return price < 1000;
});

console.log("\nProducts below ₹1000:");
console.log(affordableProducts);
