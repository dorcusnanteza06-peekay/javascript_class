const names = "this is Dorcus"
console.log("This is Dorcus");

//// variables ///
//let name = "joker";

///declaring a variable
//declaring variables uses var,let or const

//var is function-scoped and can be redeclared and updated 
var name = "joker";
console.log("name");

let age = 27
console.log(age);
age = 18
console.log("my age has changed because iam just a girl",age);

////cost is block-scoped and cannot be updated or declared
const country = "uganda";
console.log(country);
country = "kenya"; //This 
console.log(country)

/// 1. string data type 
let greetings = "hello, how are you"
console.log (greeting);

///2. Number data type

let x = 20;
let y = 40;
//console.log(x); 
console.log(y);
console.log(typeof x);
console.log(typeof y);

///strings 
///numbers 
///booleans 
/// arrays 
/// undefined 
/// js conditionals 

/// js assignment about if function 
function getGrade(marks) {
    if (marks >= 80) {
        return "Distinction";
    } else if (marks >= 70) {
        return "First Class";
    } else if (marks >= 60) {
        return "Second Class";
    } else if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Example usage
let studentMarks = 75;
let grade = getGrade(studentMarks);

console.log("Marks: " + studentMarks);
console.log("Grade: " + grade);


//// loops

let scores 

