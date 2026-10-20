
/*
    JavaScript Array Sorting and Searching
    Topics: sort(), toSorted(), find(), findIndex(),
    some(), every(), includes(), and binary search
*/

// 1. Sort Numbers in Ascending Order
console.log("1. Ascending Sort:");

const numbers = [40, 5, 100, 25, 10];

// sort() modifies the original array.
const ascending = [...numbers].sort((a, b) => a - b);

console.log("Original:", numbers);
console.log("Ascending:", ascending);


// 2. Sort Numbers in Descending Order
console.log("\n2. Descending Sort:");

const descending = [...numbers].sort((a, b) => b - a);

console.log(descending);


// 3. Default String Sorting
console.log("\n3. String Sort:");

const fruits = ["Mango", "Apple", "Banana", "Orange"];

console.log([...fruits].sort());


// 4. Case-Insensitive Alphabetical Sorting
console.log("\n4. Case-Insensitive Sort:");

const names = ["rahul", "Amit", "priya", "Neha"];

const sortedNames = [...names].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
);

console.log(sortedNames);


// 5. Sort Objects by a Property
console.log("\n5. Sort Objects:");

const students = [
    { name: "Alex", marks: 78 },
    { name: "Sam", marks: 92 },
    { name: "John", marks: 65 },
    { name: "Priya", marks: 88 }
];

const highestMarks = [...students].sort(
    (a, b) => b.marks - a.marks
);

console.log("Ranked Students:", highestMarks);


// 6. Search Using includes()
console.log("\n6. includes():");

const languages = ["JavaScript", "Python", "Java"];

console.log(languages.includes("Python")); // true
console.log(languages.includes("C++")); // false


// 7. Find the First Matching Element
console.log("\n7. find():");

const firstHighScore = students.find(
    (student) => student.marks >= 85
);

console.log(firstHighScore);


// 8. Find the Index of a Matching Element
console.log("\n8. findIndex():");

const index = students.findIndex(
    (student) => student.name === "John"
);

console.log("John's Index:", index);


// 9. Check Whether Any Element Matches
console.log("\n9. some():");

const hasTopScorer = students.some(
    (student) => student.marks >= 90
);

console.log("Has a 90+ scorer:", hasTopScorer);


// 10. Check Whether All Elements Match
console.log("\n10. every():");

const allPassed = students.every(
    (student) => student.marks >= 35
);

console.log("All students passed:", allPassed);


// 11. Linear Search
console.log("\n11. Linear Search:");

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30)); // 2
console.log(linearSearch([10, 20, 30, 40], 99)); // -1


// 12. Binary Search — Requires a Sorted Array
console.log("\n12. Binary Search:");

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (array[middle] === target) {
            return middle;
        }

        if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

const sortedNumbers = [10, 20, 30, 40, 50, 60];

console.log(binarySearch(sortedNumbers, 40)); // 3
console.log(binarySearch(sortedNumbers, 25)); // -1


// 13. Non-Mutating Sort with toSorted()
console.log("\n13. toSorted():");

const original = [8, 3, 10, 1];

if (typeof original.toSorted === "function") {
    const result = original.toSorted((a, b) => a - b);

    console.log("Original:", original);
    console.log("Sorted copy:", result);
} else {
    console.log("Use [...original].sort((a, b) => a - b) instead.");
}
