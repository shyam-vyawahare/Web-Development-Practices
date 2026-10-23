
/*
    JavaScript Data Transformation Practice
    Topics: map, filter, reduce, sort, chaining,
    Object.entries(), grouping, and aggregation
*/

// 1. Transform an Array with map()
console.log("1. Transform with map:");

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(number => number ** 2);

console.log("Original:", numbers);
console.log("Squares:", squares);


// 2. Filter Data
console.log("\n2. Filter Data:");

const scores = [45, 82, 67, 30, 95, 72];

const passingScores = scores.filter(score => score >= 50);

console.log("Passing scores:", passingScores);


// 3. Aggregate Data with reduce()
console.log("\n3. Reduce:");

const total = numbers.reduce((sum, number) => sum + number, 0);

console.log("Total:", total);

const average = total / numbers.length;

console.log("Average:", average);


// 4. Chain Array Methods
console.log("\n4. Method Chaining:");

const result = [1, 2, 3, 4, 5, 6, 7, 8]
    .filter(number => number % 2 === 0)
    .map(number => number ** 2)
    .reduce((sum, number) => sum + number, 0);

console.log("Sum of even-number squares:", result);
// 4² + 16 + 36 + 64 = 120


// 5. Transform an Array of Objects
console.log("\n5. Object Transformation:");

const students = [
    { name: "Alex", marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Sam", marks: 45 },
    { name: "Neha", marks: 76 }
];

const studentNames = students.map(student => student.name);

console.log("Names:", studentNames);

const toppers = students.filter(student => student.marks >= 80);

console.log("Toppers:", toppers);


// 6. Calculate Summary Statistics
console.log("\n6. Summary Statistics:");

const summary = students.reduce((result, student) => {
    result.totalMarks += student.marks;
    result.count++;

    return result;
}, { totalMarks: 0, count: 0 });

summary.averageMarks = summary.totalMarks / summary.count;

console.log(summary);


// 7. Sort Without Mutating the Original Array
console.log("\n7. Non-Mutating Sort:");

const sortedStudents = [...students].sort(
    (a, b) => b.marks - a.marks
);

console.log("Ranked:", sortedStudents);
console.log("Original remains unchanged:", students);


// 8. Convert an Object into Entries
console.log("\n8. Object.entries():");

const user = {
    name: "Ultrex",
    role: "Developer",
    language: "JavaScript"
};

const entries = Object.entries(user);

console.log(entries);

for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}


// 9. Transform Entries Back into an Object
console.log("\n9. Object.fromEntries():");

const prices = {
    laptop: 50000,
    mouse: 800,
    keyboard: 1500
};

const discountedPrices = Object.fromEntries(
    Object.entries(prices).map(([product, price]) => [
        product,
        Math.round(price * 0.9)
    ])
);

console.log("Original prices:", prices);
console.log("Prices after 10% discount:", discountedPrices);


// 10. Group Products by Category
console.log("\n10. Grouping Data:");

const products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Phone", category: "Electronics", price: 20000 },
    { name: "Chair", category: "Furniture", price: 3000 },
    { name: "Desk", category: "Furniture", price: 7000 },
    { name: "Headphones", category: "Electronics", price: 2500 }
];

const groupedProducts = Object.groupBy
    ? Object.groupBy(products, product => product.category)
    : products.reduce((groups, product) => {
        const category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;
    }, Object.create(null));

console.log(groupedProducts);


// 11. Calculate Total Price by Category
console.log("\n11. Category Totals:");

const categoryTotals = products.reduce((totals, product) => {
    totals[product.category] =
        (totals[product.category] || 0) + product.price;

    return totals;
}, {});

console.log(categoryTotals);


// 12. Remove Duplicate Objects by ID
console.log("\n12. Remove Duplicate Records:");

const records = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Priya" },
    { id: 1, name: "Alex" },
    { id: 3, name: "Sam" }
];

const uniqueRecords = [
    ...new Map(records.map(record => [record.id, record])).values()
];

console.log(uniqueRecords);


// 13. Build a Simple Data Pipeline
console.log("\n13. Practical Data Pipeline:");

const orders = [
    { id: 1, amount: 1200, status: "completed" },
    { id: 2, amount: 800, status: "pending" },
    { id: 3, amount: 2500, status: "completed" },
    { id: 4, amount: 400, status: "cancelled" },
    { id: 5, amount: 1800, status: "completed" }
];

const completedOrders = orders.filter(
    order => order.status === "completed"
);

const revenue = completedOrders.reduce(
    (sum, order) => sum + order.amount,
    0
);

const orderReport = completedOrders
    .map(order => ({
        orderId: order.id,
        amount: order.amount,
        tax: Number((order.amount * 0.18).toFixed(2)),
        total: Number((order.amount * 1.18).toFixed(2))
    }))
    .sort((a, b) => b.amount - a.amount);

console.log("Completed orders:", completedOrders.length);
console.log("Revenue before tax:", revenue);
console.log("Order report:", orderReport);
