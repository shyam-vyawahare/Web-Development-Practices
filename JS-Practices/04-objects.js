/*
    JavaScript Objects Practice

    Concepts covered:
    - Creating objects
    - Accessing properties
    - Updating properties
    - Adding properties
    - Deleting properties
    - Nested objects
    - Object methods
    - for...in loop
*/

// Create an object
let student = {
    name: "Shyam",
    age: 21,
    branch: "Electronics & Computer Engineering",
    skills: ["HTML", "CSS", "JavaScript"],
    isStudent: true
};

console.log("Student:");
console.log(student);


// Access properties
console.log("\nName:", student.name);
console.log("Branch:", student.branch);


// Access using bracket notation
console.log("Age:", student["age"]);


// Update a property
student.age = 22;

console.log("\nUpdated age:", student.age);


// Add a new property
student.city = "Ambajogai";

console.log("\nAfter adding city:");
console.log(student);


// Delete a property
delete student.isStudent;

console.log("\nAfter deleting isStudent:");
console.log(student);


// Access array inside an object
console.log("\nFirst skill:", student.skills[0]);


// Add a new skill
student.skills.push("React");

console.log("Updated skills:", student.skills);


// Nested object
student.contact = {
    email: "shyam@example.com",
    github: "shyam-vyawahare"
};

console.log("\nGitHub:", student.contact.github);


// Object method
student.introduce = function () {
    console.log(
        `Hello, I am ${this.name} and I am learning web development.`
    );
};

console.log("\nIntroduction:");
student.introduce();


// Loop through object properties
console.log("\nStudent Details:");

for (let key in student) {
    console.log(key, ":", student[key]);
}
