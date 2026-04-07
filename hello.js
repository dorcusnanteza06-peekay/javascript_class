///console.log ("Here is my first javascript code");

//alert("This is your first alert");

///variables 
/// Declaring variables    var, let, const
/// var is function- scoped and can be redeclared and updated

//var name = "job";
//console.log(name);
//name = "john";
//console.log (name)

//// let//

///let age = 30;
///console.log(age);
///age = 20
//console.log("My age has changed because Iam just a girl", age);

/// const is block-scoped and cannot be updated or redeclared
//const height = 5.8;
//console.log(height);
/// height = 6.0/// this would cause an error

///const country = "Uganda";
///console.log(country);
///country = "kenya"
///console.log(kenya);


//// Data Types 
/// String data type 
//let greeting = "Hello, How are you?";      ////string 
//console.log(greeting);
//console.log(typeof greeting); 

//// Number data type
//let year = 2026;
//console.log(year);
//console.log(typeof year);

//let x = 10;
//let y = "12";          //// this makes it a string 
//console.log (x);
//console.log(y);
//console.log(typeof x);
//console.log(typeof y);

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
///if (condition) {
    /// code to be executed if condition is true
///};

// if else statement 
// definition of the if-else statement

///if (condition){
    /// code to be executed if conditions is true
///} else{
    /// code to be executed if the condition is false
//}

/// else-if statement
/// definition of else if statement
///if (condition1){
    /// code to be executed if conidition 1 is true
//} else if (conidition2){ 
    /// code to be executed if condition is true
//} else if(condition3){
    /// code to be executed if condition is false
//} else{
       /// code to be executed if condition is false
//}


/// practical examples 
let mark = 30;

if (mark > 69){
    console.log("Very good, you have passed the exam");
}
else if(mark >= 40){
    console.log("fair, you have faired the exam");
}
else {
    console.log("poor, you failed the exam");
}


/// Comparsion Operators
/// 1. Equal to  (**)
// Eg of equal to operator
//if(name = "john") /// used to asign a value
//if (name =="john")   ///this will compare to john and evaluate to true

/// 2. Not Equal to (!=)
/// 3. Strict egual to (***)
/// 4. Strict Not Equal to (!**)
/// 5. Greater than(>)
/// 6. less than (<)
/// 7. Greater than or Equal to (>=)
/// 8. Less than or Equal to(<=)

/// ARRAY
// its a list of numbers, strings, Booleans, 
/// is a data structure that can hold a multiple structures 
// examples of arrays
//cars = ["volvo","Bez","Toyota","kia"]
//numbers = [1,2,3,4,5,6]
//['job',30,'uganda',true,null,undefined]

// example 1
//var cars = ["volvo","Bez","Toyota","kia"];
//console.log(cars);
//console.log (cars[2]);

//example 2 
//let mixedArray = ['job',30,'Uganda',true,null,undefined,(name = "john")];
//console.log(mixedArray);
//console.log(mixedArray[6]);

/// objects
//{}  // empty object
//{
    //name: "job",
    //age: 30,
    //country: "USA",
    //isStudent: 
//}    /// object with a property called name john

//example 1
let person = {
    name: "job",
    age:30,
    country:"Uganda",
    isStudent:true,
    hobbies:['coding','travelling'],
    address:{
        Street:'123 Mainst',
        City:'Kampala',
        Country:'Uganda'
    }

}
console.log(person);
console.log(person["name"]);  ///accessing the name property
console.log (person.hobbies[1])  /// accessing hobbies 

/// forEach
/// fall back function
/// control loop
/// functions
// functions are reuseable blocks of code that perform a specific task
// take parameters and return values 
// function declaration we use the function keyword to declare a function E.g

//function fristName(){
    /// code 
    //return parameter;   /// returning the parameter
//}

//function bold(parameter1,parameter2,parameter3){
    //return parameter1+parameter2+parameter3;
//}

/// example of a function
function returnValue(){
    let value = "this is my first function in javascript";
    console.log(value);
}
returnValue();     // This is how you call a function to execute the code inside it

// example 2
function returnParameter(parameter){
    return parameter;
}
///console.log(returnParameter("Hello, this is my second function in javascript"));

 const result = returnParameter("Hello, this is my second function in javascript");
 console.log(result);

 // example 3  returning the sum
 function addNumbers(x,y){
    return x + y;            //// x and y are parameters
 }
const sum =addNumbers(5,10);      /// 5 and 10 are arguments 
console.log (sum);

/// loops in javascript 
//1. while loop
//2. Do while Loop
//3. For Loop
// example 1
for (let i = 0; i < 7 ;i++){
    console.log(i);
}
/// example 2 increameting for loop
for (let i = 7; i > 0; i--){
    console.log(i);
}


/// example 2 Decreameting for loop
//for (let i = 7; i > 0; i++){
    //console.log(i);
//}

const myCars = ['Volvo','Benz','BMW','Toyota'];
console.log(myCars);
const numberOfCars = myCars.length;   // this gives you the number of elements in the array
const BmwPosition = myCars.indexOf('BMW');
console.log('postion of the BMW in the array is ',BmwPosition);
console.log (numberOfCars);

for (let i = 0; i<myCars.length; i++){
    console.log(myCars[i]);
}

for(let car of myCars){
    function printCarPosition(car){
        const index = myCars.indexOf(car);
        console.log ('The position of '+car +' in the array is '+ index );
    }
    printCarPosition(car);
    console.log(car);
}
/// 2. while Loop
//while(condition){
    /// code to be executed as long as the condition is true
//}

/// Increamenting while loop
let id =0; 
while (id < 7){
    console.log('From the while loop +, id');
    id++;  
}

let password = "";

while (password !== "1234"){
    password = prompt("Please enter the password:");
}

alert("Access granted!");


/// Decreamenting while loop

let ie =10; 
while (ie > 1){
    console.log('From the while loop +, ie');
    ie--;  
}

/// Do while Loop
//do{
    /// code to be executed
///} while (condition);

///example 
let i = 0;
do{
    console.log ('From the do while loop',i);
    i++;
} while (i < 7);


  





