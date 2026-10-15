
/*
    JavaScript OOP Practice
    Topics: Classes, Constructors, Methods,
    Inheritance, Encapsulation, and Static Methods
*/

// 1. Basic Class and Constructor
class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    introduce() {
        return `Hi, I'm ${this.name}, ${this.age} years old, studying ${this.course}.`;
    }
}

const student1 = new Student("Ultrex", 21, "Electronics & Computer Engineering");

console.log("1. Student Introduction:");
console.log(student1.introduce());


// 2. Inheritance
class Developer extends Student {
    constructor(name, age, course, language) {
        super(name, age, course);
        this.language = language;
    }

    code() {
        return `${this.name} is coding in ${this.language}.`;
    }
}

const developer1 = new Developer("Alex", 22, "Computer Science", "JavaScript");

console.log("\n2. Inheritance:");
console.log(developer1.introduce());
console.log(developer1.code());


// 3. Encapsulation with Private Fields
class BankAccount {
    #balance;

    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit must be greater than zero.");
        }

        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("Ultrex", 1000);

console.log("\n3. Encapsulation:");
console.log("Initial Balance:", account.getBalance());
console.log("After Deposit:", account.deposit(500));
console.log("After Withdrawal:", account.withdraw(200));

// console.log(account.#balance); // SyntaxError: private field


// 4. Static Methods
class Calculator {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log("\n4. Static Methods:");
console.log("Addition:", Calculator.add(10, 5));
console.log("Multiplication:", Calculator.multiply(10, 5));


// 5. Method Overriding
class Animal {
    speak() {
        return "The animal makes a sound.";
    }
}

class Dog extends Animal {
    speak() {
        return "The dog barks.";
    }
}

const dog = new Dog();

console.log("\n5. Method Overriding:");
console.log(dog.speak());
