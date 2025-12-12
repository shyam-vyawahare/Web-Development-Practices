console.log("Hay this is 2nd pratice video")

var a = 5; // var is globally scopped
a = a + 1; // varibals value can be changed
var b = 6;
var c = "Ultrex";
var _a = "Saniya";
// var 55a = "Saniya"; // Invalid var name

console.log(typeof a, typeof b, typeof c) // Shows the datatype in the consol
console.log(a + b)

const a1 = 5;
//  a1 = a1 + 1;  
//  Const value cannot be changed NOT ALLOWED

let a2 = 5; // Let is global
{
    // let is used for keeping the block level values inside it
    let m = 55; // The let value declared inside the block
    console.log(a2) // Let value can be accesed in the blocks
    var a = 22; // The var a value updates as it is globally scopped
}

// console.log(x)      // The let declared inside the block cannot be accesed outside of block
console.log(a)

let x = "Ultrex bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null; // The type of null is object (asked in interviews as Why)

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// Creating an Object key value pairs
let o = {
    name: "Ultrex",
    "job code": 5600,
    "is_handsome": true
}
console.log(o)
o.salary = "100 crores";
console.log(o)
o.salary = "500 crores";
console.log(o); // The value is updated in the o object