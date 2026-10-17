
/*
    JavaScript Map and Set Practice
    Topics: Map, Set, WeakMap, WeakSet,
    iteration, uniqueness, and practical use cases
*/

// 1. Set Basics — Store Unique Values
console.log("1. Set Basics:");

const numbers = new Set([10, 20, 20, 30, 30, 40]);

console.log("Unique Numbers:", numbers);
console.log("Size:", numbers.size);
console.log("Has 20:", numbers.has(20));

numbers.add(50);
numbers.delete(10);

console.log("After Updates:", numbers);


// 2. Remove Duplicates from an Array
console.log("\n2. Removing Duplicates:");

const names = ["Alex", "Sam", "Alex", "John", "Sam"];

const uniqueNames = [...new Set(names)];

console.log("Original:", names);
console.log("Unique:", uniqueNames);


// 3. Iterate over a Set
console.log("\n3. Set Iteration:");

const skills = new Set(["HTML", "CSS", "JavaScript"]);

for (const skill of skills) {
    console.log(skill);
}


// 4. Map Basics — Key-Value Pairs
console.log("\n4. Map Basics:");

const student = new Map();

student.set("name", "Ultrex");
student.set("course", "Electronics & Computer Engineering");
student.set("year", 2026);

console.log("Name:", student.get("name"));
console.log("Has course:", student.has("course"));
console.log("Map Size:", student.size);

student.delete("year");

console.log("After Deletion:", student);


// 5. Maps Can Use Different Key Types
console.log("\n5. Different Key Types:");

const data = new Map();

const objectKey = { id: 1 };

data.set("language", "JavaScript");
data.set(100, "Numeric key");
data.set(objectKey, "Object key");

console.log(data.get("language"));
console.log(data.get(100));
console.log(data.get(objectKey));


// 6. Iterating over a Map
console.log("\n6. Map Iteration:");

const scores = new Map([
    ["Alex", 85],
    ["Sam", 92],
    ["John", 78]
]);

for (const [name, score] of scores) {
    console.log(`${name}: ${score}`);
}


// 7. Count Character Frequencies
console.log("\n7. Character Frequency:");

function countCharacters(text) {
    const frequency = new Map();

    for (const character of text.toLowerCase()) {
        if (character === " ") continue;

        frequency.set(
            character,
            (frequency.get(character) || 0) + 1
        );
    }

    return frequency;
}

const frequencies = countCharacters("JavaScript");

console.log([...frequencies]);


// 8. Count Array Element Frequencies
console.log("\n8. Element Frequency:");

function countElements(items) {
    const frequency = new Map();

    for (const item of items) {
        frequency.set(item, (frequency.get(item) || 0) + 1);
    }

    return frequency;
}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log([...countElements(fruits)]);


// 9. WeakMap Basics
console.log("\n9. WeakMap:");

const privateData = new WeakMap();

const user = { name: "Ultrex" };

privateData.set(user, { loginCount: 5 });

console.log("Login Count:", privateData.get(user).loginCount);

privateData.delete(user);

console.log("Has User:", privateData.has(user));


// 10. WeakSet Basics
console.log("\n10. WeakSet:");

const activeUsers = new WeakSet();

const user1 = { name: "Alex" };
const user2 = { name: "Sam" };

activeUsers.add(user1);
activeUsers.add(user2);

console.log("Alex Active:", activeUsers.has(user1));

activeUsers.delete(user1);

console.log("Alex Active:", activeUsers.has(user1));


// 11. Practical Example — Track Unique Visitors
console.log("\n11. Unique Visitors:");

const visitors = [
    "user101",
    "user102",
    "user101",
    "user103",
    "user102",
    "user104"
];

const uniqueVisitors = new Set(visitors);

console.log("Total Visits:", visitors.length);
console.log("Unique Visitors:", uniqueVisitors.size);
