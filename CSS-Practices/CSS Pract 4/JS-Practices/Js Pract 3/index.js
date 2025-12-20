console.log("Hello, I am conditional tutoral");

let age = 0;
let grace = 2;

age += grace;
console.log(age)
    // Operators
console.log(age + grace)
console.log(age - grace)
console.log(age / grace)
console.log(age * grace)
console.log(age ** grace)
console.log(age % grace)

// if else if ladder
if (age == 18) {
    console.log("You can drive");
} else if (age == 0) {
    console.log("Are you kidding me...!")
} else {
    console.log("You cannot drive");
}

let value = "3"; // Value is 3 but the datatype is string
console.log(value == 3) // The double equal to checks the values are equal or not
console.log(value === 3) // The tripple equal to not only checks the value but also the datatype is equal or not
console.log(value != 5) // Only value checked
console.log(value !== 3) // Value and datatype

a = 5;
b = 8;
let c = a > b ? (a - b) : (b - a); // This one is short of following if else
/*
if (a > b) {
    let c = a - b;
} else {
    let c = b - a;    
}
*/