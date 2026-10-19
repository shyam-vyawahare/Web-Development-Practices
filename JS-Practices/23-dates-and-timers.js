
/*
    JavaScript Dates and Timers Practice
    Topics: Date, timestamps, formatting,
    setTimeout(), setInterval(), and clearInterval()
*/

// 1. Get Current Date and Time
console.log("1. Current Date and Time:");

const now = new Date();

console.log("Current Date:", now);
console.log("Year:", now.getFullYear());
console.log("Month (0-based):", now.getMonth());
console.log("Day of Month:", now.getDate());
console.log("Day of Week:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());


// 2. Format a Date
console.log("\n2. Date Formatting:");

const date = new Date();

console.log("Local Date:", date.toLocaleDateString());
console.log("Local Time:", date.toLocaleTimeString());
console.log(
    "Formatted:",
    date.toLocaleString("en-IN", {
        dateStyle: "long",
        timeStyle: "short"
    })
);


// 3. Create a Specific Date
console.log("\n3. Specific Date:");

const birthday = new Date(2004, 5, 15);

console.log("Birthday:", birthday.toDateString());

// Note: Month is zero-based. 5 means June.


// 4. Compare Dates
console.log("\n4. Date Comparison:");

const deadline = new Date("2026-12-31T23:59:59");
const currentDate = new Date();

if (currentDate < deadline) {
    console.log("Deadline is still in the future.");
} else {
    console.log("Deadline has passed.");
}


// 5. Calculate Difference Between Dates
console.log("\n5. Date Difference:");

function daysBetween(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;

    const first = Date.UTC(
        date1.getFullYear(),
        date1.getMonth(),
        date1.getDate()
    );

    const second = Date.UTC(
        date2.getFullYear(),
        date2.getMonth(),
        date2.getDate()
    );

    return Math.round(Math.abs(second - first) / oneDay);
}

console.log(
    "Days between:",
    daysBetween(new Date("2026-01-01"), new Date("2026-12-31"))
);


// 6. setTimeout() — Run Once After a Delay
console.log("\n6. setTimeout():");

const timeoutId = setTimeout(() => {
    console.log("This message appears after 2 seconds.");
}, 2000);

// To cancel before it runs:
// clearTimeout(timeoutId);


// 7. setInterval() — Repeat an Operation
console.log("\n7. setInterval():");

let count = 0;

const intervalId = setInterval(() => {
    count++;

    console.log("Interval count:", count);

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval stopped.");
    }
}, 1000);


// 8. Digital Clock
console.log("\n8. Digital Clock:");

function displayTime() {
    const time = new Date().toLocaleTimeString("en-IN");

    console.log("Current Time:", time);
}

// Display once immediately, then every second.
displayTime();

const clockId = setInterval(displayTime, 1000);

// Uncomment to stop the clock after 10 seconds:
// setTimeout(() => clearInterval(clockId), 10000);


// 9. Countdown Timer
console.log("\n9. Countdown Timer:");

function countdown(seconds) {
    let remaining = seconds;

    console.log(`Starting countdown: ${remaining}`);

    const timerId = setInterval(() => {
        remaining--;

        console.log("Remaining:", remaining);

        if (remaining <= 0) {
            clearInterval(timerId);
            console.log("Countdown complete!");
        }
    }, 1000);

    return timerId;
}

// Uncomment to test:
// countdown(5);


// 10. Unix Timestamp
console.log("\n10. Unix Timestamp:");

const timestamp = Date.now();

console.log("Milliseconds since Unix epoch:", timestamp);
console.log("Seconds since Unix epoch:", Math.floor(timestamp / 1000));


// 11. Add Days to a Date
console.log("\n11. Add Days:");

function addDays(originalDate, days) {
    const result = new Date(originalDate);

    result.setDate(result.getDate() + days);

    return result;
}

console.log(
    "After 7 days:",
    addDays(new Date(), 7).toLocaleDateString()
);
