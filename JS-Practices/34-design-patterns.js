
/*
    JavaScript Design Patterns Practice

    Topics:
    1. Module Pattern
    2. Singleton Pattern
    3. Factory Pattern
    4. Observer Pattern
    5. Strategy Pattern
    6. Constructor Pattern
    7. Decorator Pattern
*/


// 1. MODULE PATTERN
// Encapsulates data and exposes selected methods.

console.log("1. Module Pattern:");

const Calculator = (() => {
    let result = 0;

    return {
        add(number) {
            result += number;
            return result;
        },

        subtract(number) {
            result -= number;
            return result;
        },

        getResult() {
            return result;
        }
    };
})();

console.log(Calculator.add(10));
console.log(Calculator.add(5));
console.log(Calculator.subtract(3));
console.log("Final Result:", Calculator.getResult());


// 2. SINGLETON PATTERN
// Ensures one shared instance is reused.

console.log("\n2. Singleton Pattern:");

class AppConfig {
    constructor() {
        if (AppConfig.instance) {
            return AppConfig.instance;
        }

        this.appName = "Web Practices";
        this.version = "1.0.0";

        AppConfig.instance = this;
    }
}

const config1 = new AppConfig();
const config2 = new AppConfig();

console.log(config1.appName);
console.log("Same Instance:", config1 === config2);


// 3. FACTORY PATTERN
// Creates objects without exposing construction details.

console.log("\n3. Factory Pattern:");

function createUser(name, role) {
    return {
        name,
        role,

        introduce() {
            return `I am ${name}, working as ${role}.`;
        }
    };
}

const developer = createUser("Ultrex", "Developer");
const designer = createUser("Alex", "Designer");

console.log(developer.introduce());
console.log(designer.introduce());


// 4. OBSERVER PATTERN
// Notifies subscribers whenever an event occurs.

console.log("\n4. Observer Pattern:");

class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new Set();
        }

        this.events[eventName].add(callback);

        // Return an unsubscribe function.
        return () => {
            this.events[eventName].delete(callback);
        };
    }

    emit(eventName, data) {
        this.events[eventName]?.forEach(callback => {
            callback(data);
        });
    }
}

const emitter = new EventEmitter();

const unsubscribe = emitter.subscribe("login", user => {
    console.log(`${user} logged in.`);
});

emitter.emit("login", "Ultrex");
unsubscribe();

emitter.emit("login", "Alex"); // No notification


// 5. STRATEGY PATTERN
// Allows interchangeable algorithms.

console.log("\n5. Strategy Pattern:");

const paymentStrategies = {
    card(amount) {
        return `Paid ₹${amount} using Card.`;
    },

    upi(amount) {
        return `Paid ₹${amount} using UPI.`;
    },

    cash(amount) {
        return `Paid ₹${amount} using Cash.`;
    }
};

function processPayment(amount, strategy) {
    if (!paymentStrategies[strategy]) {
        throw new Error("Unsupported payment method.");
    }

    return paymentStrategies[strategy](amount);
}

console.log(processPayment(1000, "upi"));
console.log(processPayment(2500, "card"));
console.log(processPayment(500, "cash"));


// 6. CONSTRUCTOR PATTERN
// Uses constructors to initialize objects.

console.log("\n6. Constructor Pattern:");

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.getDetails = function () {
    return `${this.name} costs ₹${this.price}.`;
};

const laptop = new Product("Laptop", 50000);
const phone = new Product("Phone", 20000);

console.log(laptop.getDetails());
console.log(phone.getDetails());


// 7. DECORATOR PATTERN
// Adds functionality without modifying the original function.

console.log("\n7. Decorator Pattern:");

function withLogging(callback) {
    return function (...args) {
        console.log("Function started:", callback.name);

        const result = callback.apply(this, args);

        console.log("Function completed:", callback.name);

        return result;
    };
}

function multiply(a, b) {
    return a * b;
}

const loggedMultiply = withLogging(multiply);

console.log("Result:", loggedMultiply(5, 4));


// 8. PRACTICAL EXAMPLE — NOTIFICATION SYSTEM

console.log("\n8. Notification System:");

class NotificationService {
    constructor() {
        this.subscribers = new Set();
    }

    subscribe(callback) {
        this.subscribers.add(callback);

        return () => this.subscribers.delete(callback);
    }

    notify(message) {
        this.subscribers.forEach(callback => {
            callback(message);
        });
    }
}

const notificationService = new NotificationService();

notificationService.subscribe(message => {
    console.log("Email Notification:", message);
});

notificationService.subscribe(message => {
    console.log("Dashboard Notification:", message);
});

notificationService.notify("Your profile was updated!");
