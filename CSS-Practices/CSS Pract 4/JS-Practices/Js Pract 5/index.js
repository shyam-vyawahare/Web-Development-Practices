// Without Functions
// console.log("Hay Ultrex you are Hero...!")
// console.log("Hay Ultrex you are Super Hero")
// console.log("Hay Ultrex you are Good One")
// console.log("Hay Ultrex you are Cool")
// Writing these without function will make editing hard and hectic for long codes

// Making a Function
function nice(name) {
    console.log("Hay " + name + " you are Hero..!")
    console.log("Hay " + name + " you are Super Hero..!")
    console.log("Hay " + name + " you are Good One..!")
    console.log("Hay " + name + " you are Cool..!")
}
// Calling the Function
// nice("Shyam")
// nice("Ultrex") // Hence function block now can be used repeatatively

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c // The return is used to get value in whatever variable we want
} // Will add the predefined value c
// This function cannot be used repeatatively without using variable to store the return
// Using the variable this function can used multiple times

result1 = sum(3, 2)
result2 = sum(3, 5) // The function can be used multiple times becaus of return use
result3 = sum(3, 5, 2) // Optional parameter c is given, the predefined value is ignored
result4 = sum(3) // Incomplete Parameter will return NaN 
    // The number not passed is considered as Undefined. Hence "Number"+"Undefined"=NaN (is Not a Number)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)
console.log("The sum of these numbers is: ", result4)

// Arrow function (Putting a function inside a const)
// Arrow function is used to directly use it repeatatively
const func1 = (x) => {
        console.log("I am an arrow funciton", x)
    } // Now this funtion can be used multiple times

// Now the function can be directly used without refining variable.
func1(34); // Semi colon (;) is optional  in JavaScript
func1(25); // Directly used funcion for multiple times
func1(69);