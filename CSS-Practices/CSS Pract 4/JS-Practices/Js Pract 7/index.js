console.log("This is Strings Tutorial...!");

let a = "Ultrex";

console.log(a); // Prints the entire string
console.log(a[0]); // Accesses the string's 0th character that is U
console.log(a[1]); // Accesses the string's 1st character that is l
console.log(a[2]); // Accesses the string's 2nd character that is t
console.log(a[3]); // Accesses the string's 3rd character that is r
console.log(a[4]); // Accesses the string's 4th character that is e
console.log(a[5]); // Accesses the string's 5th character that is x

console.log(a.length); // Length of the string
console.log(a[a.length - 1]); // Accesses the last character of the string

// Strings are immutable
a[0] = "Y";
console.log(a[0]) // Still prints U because strings are immutable

let real_name = "Shyam";
let gamingtag = "Ultrex";

console.log("His name is " + real_name + " and his gaming tag is " + gamingtag); // Concatenation of strings

console.log(`His name is ${real_name} and his gaming tag is ${gamingtag}`); // Using template literals for concatenation

console.log("-------------------");
let b = 'This is a \t tab space, this is the examle string b'; // \t is used for tab space
console.log(b);
console.log("-------------------");

console.log(b.length); // Length of the string including tab space and the length is not a function here so don't use () it is a property

console.log(b.toUpperCase()); // Converts string to uppercase, need to use () as it is a function
console.log(b.toLowerCase()); // Converts string to lowercase, need to use () as it is a function

console.log(b.includes("tab")); // Checks if the string includes the word "tab", returns true or false
console.log(b.includes("spaceX")); // Checks if the string includes the word "spaceX", returns true or false
console.log(b.startsWith("This")); // Checks if the string starts with "This", returns true or false
console.log(b.endsWith("space")); // Checks if the string ends with "space", returns true or false

console.log(b.indexOf("is")); // Returns the index of the first occurrence of "is"
console.log(b.indexOf("string")); // Returns the index of the first occurrence of "string"

console.log("-------------------");
let c = "This is a \nnew line, this is example string c"; // \n is used for new line
console.log(c);
console.log("-------------------");

console.log(c.length);
console.log(c.slice(0, 7)); // Slices the string from index 0 to 7 (7 not included) hence prints "This is "
console.log("-------------------");
console.log(c.slice(11)); // Slices the string from index 10 to the end
console.log("\n");

console.log("-------------------");
let d = "This is string D, here we will learn the replace function, new string, new learnings";
console.log(d);
console.log("-------------------");

console.log(d.replace("D", "d")); // Replaces the first occurrence of "D" with "d" only the first occurrence
console.log(d.replace("new", "another")); // Replaces the first occurrence of "new" with "another" only the first occurrence
console.log("-------------------");
console.log(d.replaceAll("new", "another")); // Replaces all occurrences of "new" with "another"

console.log("-------------------");
let e = "This is string E";
console.log(e);
console.log("-------------------");
let f = " and this is a seperate string F";
console.log(f);
console.log("-------------------");
console.log("Different ways to concatenate strings:- using concat function, + operator and template literals");
console.log(e.concat(f)); // Concatenates string e and f
console.log(e + f); // Another way to concatenate string e and f
console.log(`${e}${f}`); // Another way to concatenate string e and f using template literals
console.log(e.concat(" this is another", "line concatenated")); // Concatenates another string to string e

console.log("-------------------");
let g = "     This is string G with leading and trailing spaces     ";
console.log(g);
console.log("-------------------");
console.log(g.trim()); // Trims the leading and trailing spaces from the string
console.log(g.trimStart()); // Trims the leading spaces from the string
console.log(g.trimEnd()); // Trims the trailing spaces from the string
console.log("-------------------");
console.log("End of Strings Tutorial...!");
console.log("-------------------");