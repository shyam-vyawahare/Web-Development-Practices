/*
    JavaScript Destructuring & Spread Practice

    Concepts covered:
    - Array destructuring
    - Object destructuring
    - Default values
    - Rest operator
    - Spread operator with arrays
    - Spread operator with objects
    - Copying arrays and objects
    - Combining data
*/

// ==========================================
// 1. ARRAY DESTRUCTURING
// ==========================================

let skills = ["HTML", "CSS", "JavaScript", "React"];

let [first, second, third, fourth] = skills;

console.log("Array Destructuring:");
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


// Skip elements

let [frontend, , javascript] = skills;

console.log("\nSkipping an element:");
console.log(frontend);
console.log(javascript);


// Default value

let [skill1, skill2, skill3, skill4, skill5 = "Node.js"] = skills;

console.log("\nDefault value:");
console.log(skill5);


// ==========================================
// 2. OBJECT DESTRUCTURING
// ==========================================

let developer = {
    name: "Shyam",
    role: "Frontend Developer",
    experience: 0,
    location: "India"
};

let { name, role, experience } = developer;

console.log("\nObject Destructuring:");
console.log(name);
console.log(role);
console.log(experience);


// Rename variables while destructuring

let { name: developerName, role: developerRole } = developer;

console.log("\nRenamed variables:");
console.log(developerName);
console.log(developerRole);


// Default value

let { company = "Not specified" } = developer;

console.log("\nDefault object value:");
console.log(company);


// ==========================================
// 3. SPREAD OPERATOR WITH ARRAYS
// ==========================================

let frontendSkills = ["HTML", "CSS", "JavaScript"];
let backendSkills = ["Node.js", "Express"];

let allSkills = [...frontendSkills, ...backendSkills];

console.log("\nCombined arrays:");
console.log(allSkills);


// Add new elements while copying

let updatedSkills = [...allSkills, "MongoDB"];

console.log("\nUpdated skills:");
console.log(updatedSkills);


// ==========================================
// 4. COPYING AN ARRAY
// ==========================================

let originalArray = [10, 20, 30];

let copiedArray = [...originalArray];

copiedArray.push(40);

console.log("\nOriginal array:");
console.log(originalArray);

console.log("Copied array:");
console.log(copiedArray);


// ==========================================
// 5. SPREAD OPERATOR WITH OBJECTS
// ==========================================

let basicInfo = {
    name: "Shyam",
    age: 22
};

let professionalInfo = {
    role: "Developer",
    skills: ["JavaScript", "React"]
};

let completeInfo = {
    ...basicInfo,
    ...professionalInfo
};

console.log("\nCombined object:");
console.log(completeInfo);


// ==========================================
// 6. UPDATING OBJECT WITHOUT MODIFYING ORIGINAL
// ==========================================

let updatedDeveloper = {
    ...developer,
    role: "Full Stack Developer"
};

console.log("\nOriginal developer:");
console.log(developer);

console.log("Updated developer:");
console.log(updatedDeveloper);


// ==========================================
// 7. REST OPERATOR
// ==========================================

let numbers = [10, 20, 30, 40, 50];

let [firstNumber, secondNumber, ...remainingNumbers] = numbers;

console.log("\nRest operator:");
console.log("First:", firstNumber);
console.log("Second:", secondNumber);
console.log("Remaining:", remainingNumbers);


// ==========================================
// 8. PRACTICAL EXAMPLE
// ==========================================

let user = {
    username: "Shyam",
    email: "shyam@example.com",
    role: "Developer"
};

// Extract only required data
let { username, email } = user;

console.log("\nUser information:");
console.log(username);
console.log(email);


// Add/update user information
let updatedUser = {
    ...user,
    role: "Full Stack Developer",
    active: true
};

console.log("\nUpdated user:");
console.log(updatedUser);
