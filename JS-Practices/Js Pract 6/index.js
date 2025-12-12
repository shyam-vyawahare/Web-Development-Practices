/* Problem statement: Create a faulty calculator using JavaScript 

This faulty calculator does following
1. It takes two numbers as input from the user
2. It performs wrong operations as follows
    
    + ---> -
    * ---> +
    - ---> /
    / ---> **

It performs wrong operations only 10% of the time

*/

// Solution
console.log("This is Faulty Calcularor with 10% chances")

var a = Number(prompt("Enter your first number: "))
var b = Number(prompt("Enter your second number: "))

// Wrong calculations variables c, d, e, f
function wrong(a, b) {
    let add = a - b;
    let mul = a + b;
    let sub = a / b;
    let div = a ** b;

    console.log(a + " + " + b + " = " + add)
    console.log(a + " * " + b + " = " + mul)
    console.log(a + " - " + b + " = " + sub)
    console.log(a + " / " + b + " = " + div)
}

// Correct calculation variables l, m, n, o
function Correct(a, b) {
    let add = a + b;
    let mul = a * b;
    let sub = a - b;
    let div = a / b;

    console.log(a + " + " + b + " = " + add)
    console.log(a + " * " + b + " = " + mul)
    console.log(a + " - " + b + " = " + sub)
    console.log(a + " / " + b + " = " + div)
}

let x = Math.random();
console.log(x)

if (x < 0.1) {
    wrong(a, b)
} else {
    Correct(a, b)
}