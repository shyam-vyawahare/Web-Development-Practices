/*
    JavaScript Arrays Practice

    Concepts covered:
    - Creating arrays
    - Accessing elements
    - Updating elements
    - Adding and removing elements
    - Array length
    - Looping through arrays
    - Basic array methods
*/

// Create an array
let skills = ["HTML", "CSS", "JavaScript", "React"];

console.log("Original Array:");
console.log(skills);


// Access elements
console.log("\nFirst skill:", skills[0]);
console.log("Last skill:", skills[skills.length - 1]);


// Update an element
skills[1] = "Advanced CSS";

console.log("\nAfter updating CSS:");
console.log(skills);


// Add elements
skills.push("Node.js");

console.log("\nAfter push:");
console.log(skills);


// Remove the last element
skills.pop();

console.log("\nAfter pop:");
console.log(skills);


// Add element at the beginning
skills.unshift("Git");

console.log("\nAfter unshift:");
console.log(skills);


// Remove first element
skills.shift();

console.log("\nAfter shift:");
console.log(skills);


// Array length
console.log("\nNumber of skills:", skills.length);


// Loop through the array
console.log("\nSkills:");

for (let i = 0; i < skills.length; i++) {
    console.log(`${i + 1}. ${skills[i]}`);
}


// for...of loop
console.log("\nUsing for...of:");

for (let skill of skills) {
    console.log(skill);
}
