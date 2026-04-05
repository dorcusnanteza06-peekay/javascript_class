///console.log ("Here is my first javascript code");

//alert("This is your first alert");

///variables 
/// Declaring variables    var, let, const
/// var is function- scoped and can be redeclared and updated

var name = "job";
console.log(name);
name = "john";
console.log (name)

//// let//
let age = 30;
console.log(age);
age = 20
console.log("My age has changed because Iam just a girl", age);

/// const is block-scoped and cannot be updated or redeclared
const height = 5.8;
console.log(height);
/// height = 6.0/// this would cause an error

const country = "Uganda";
console.log(country);
///country = "kenya"
///console.log(kenya);


//// Data Types 
/// String data type 
let greeting = "Hello, How are you?";      ////string 
console.log(greeting);
console.log(typeof greeting); 

//// Number data type
let year = 2026;
console.log(year);
console.log(typeof year);

let x = 10;
let y = "12";          //// this makes it a string 
console.log (x);
console.log(y);
console.log(typeof x);
console.log(typeof y);

/// Boolean data type
// its a conditional statement of true or false


/// symbol data type
/// symbol data type are mathematical expressions
let a = 5;
let b = 3;
console.log(a + b);     /// addition
console.log(a - b);     /// subtraction
console.log(a * b);     ///  multiplication
console.log(a % b);     ///  Modulus
//console.log(a / b);     ///  division
console.log(a ** b);    ///  exponentiaton

////conditionals in Js
/// if statement
/// definition of if statement
if (condition) {
    /// code to be executed if condition is true
};

// if else statement 
// definition of the if-else statement

if (condition){
    /// code to be executed if conditions is true
} else{
    /// code to be executed if the condition is false
}

/// else-if statement
/// definition of else if statement
if (condition){
    /// code to be executed if conidition 1 is true
} else if (conidition2){ 
    /// code to be executed if condition is true
} else {
    /// code to be executed if cndition is false
}


/// practical examples 
let mark = 75;

if (mark > 69){
    console.log("Very good, you have passed the exam")
}