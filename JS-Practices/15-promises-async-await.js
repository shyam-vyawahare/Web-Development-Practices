
/*
    JavaScript Promises & Async/Await

    Concepts covered:
    - Synchronous vs asynchronous execution
    - setTimeout()
    - Promise creation
    - resolve() and reject()
    - then() and catch()
    - async and await
    - try...catch
    - Promise-based data fetching
*/

// ==========================================
// 1. SYNCHRONOUS EXECUTION
// ==========================================

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

// Output: Task 1, Task 2, Task 3


// ==========================================
// 2. ASYNCHRONOUS EXECUTION
// ==========================================

console.log("\nAsync example:");

console.log("Start");

setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

// "End" appears before the timeout callback.


// ==========================================
// 3. CREATE A PROMISE
// ==========================================

function checkResult(marks) {
    return new Promise(function (resolve, reject) {
        if (marks >= 40) {
            resolve("You passed!");
        } else {
            reject(new Error("You failed."));
        }
    });
}

checkResult(75)
    .then(function (message) {
        console.log("\nPromise:", message);
    })
    .catch(function (error) {
        console.error(error.message);
    });


// ==========================================
// 4. PROMISE WITH A DELAY
// ==========================================

function wait(milliseconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, milliseconds);
    });
}

wait(1000).then(function () {
    console.log("\nWaited for 1 second.");
});


// ==========================================
// 5. ASYNC/AWAIT
// ==========================================

async function runTask() {
    console.log("\nTask started");

    await wait(1500);

    console.log("Task completed after waiting");
}

runTask();


// ==========================================
// 6. ERROR HANDLING WITH TRY/CATCH
// ==========================================

async function checkStudent(marks) {
    try {
        const result = await checkResult(marks);
        console.log("\nStudent result:", result);
    } catch (error) {
        console.error("\nStudent result:", error.message);
    }
}

checkStudent(80);
checkStudent(25);


// ==========================================
// 7. FETCH DATA FROM AN API
// ==========================================

async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const user = await response.json();

        console.log("\nFetched user:");
        console.log("Name:", user.name);
        console.log("Email:", user.email);

    } catch (error) {
        console.error("Failed to fetch user:", error.message);
    }
}

getUser();


// ==========================================
// 8. RUN MULTIPLE TASKS IN PARALLEL
// ==========================================

async function loadUsers() {
    try {
        const userIds = [1, 2, 3];

        const promises = userIds.map(function (id) {
            return fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            ).then(function (response) {
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }

                return response.json();
            });
        });

        const users = await Promise.all(promises);

        console.log("\nAll users:");
        users.forEach(function (user) {
            console.log(user.name);
        });

    } catch (error) {
        console.error("Could not load users:", error.message);
    }
}

loadUsers();
