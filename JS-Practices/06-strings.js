/*
    JavaScript Strings Practice

    Concepts covered:
    - String properties
    - String methods
    - Searching strings
    - Extracting parts of strings
    - Replacing text
    - Splitting and joining
    - Template literals
*/

let name = "Shyam Vyawahare";
let skill = "JavaScript";

console.log("Original Name:");
console.log(name);


// 1. length
console.log("\nLength:");
console.log(name.length);


// 2. toUpperCase()
console.log("\nUppercase:");
console.log(name.toUpperCase());


// 3. toLowerCase()
console.log("\nLowercase:");
console.log(name.toLowerCase());


// 4. charAt()
console.log("\nCharacter at index 0:");
console.log(name.charAt(0));


// 5. includes()
console.log("\nDoes name include 'Shyam'?");
console.log(name.includes("Shyam"));


// 6. startsWith()
console.log("\nDoes name start with 'Shyam'?");
console.log(name.startsWith("Shyam"));


// 7. endsWith()
console.log("\nDoes name end with 'Vyawahare'?");
console.log(name.endsWith("Vyawahare"));


// 8. indexOf()
console.log("\nIndex of 'V':");
console.log(name.indexOf("V"));


// 9. slice()
console.log("\nUsing slice():");
console.log(name.slice(0, 5));


// 10. substring()
console.log("\nUsing substring():");
console.log(name.substring(6, 16));


// 11. replace()
let message = "I am learning JavaScript";

console.log("\nOriginal message:");
console.log(message);

console.log("After replace:");
console.log(message.replace("JavaScript", "React"));


// 12. trim()
let userInput = "   Hello JavaScript   ";

console.log("\nBefore trim:");
console.log(userInput);

console.log("After trim:");
console.log(userInput.trim());


// 13. split()
let skills = "HTML,CSS,JavaScript,React";

let skillArray = skills.split(",");

console.log("\nString converted to array:");
console.log(skillArray);


// 14. join()
let technologies = ["HTML", "CSS", "JavaScript", "React"];

let technologyString = technologies.join(" | ");

console.log("\nArray converted to string:");
console.log(technologyString);


// 15. Template literals
let age = 22;
let role = "Frontend Developer";

let introduction = `My name is ${name}. I am ${age} years old and I am learning ${skill}.`;

console.log("\nTemplate Literal:");
console.log(introduction);


// Practical example: username formatting
let username = "  Shyam_V_  ";

let formattedUsername = username
    .trim()
    .toLowerCase()
    .replaceAll("_", "-");

console.log("\nFormatted Username:");
console.log(formattedUsername);


// Practical example: simple search
let searchText = "JavaScript is one of the most popular programming languages.";

let searchQuery = "javascript";

if (searchText.toLowerCase().includes(searchQuery.toLowerCase())) {
    console.log("\nSearch result: Found");
} else {
    console.log("\nSearch result: Not Found");
}
