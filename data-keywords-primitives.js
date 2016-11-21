//Use data types, keywords, and primitives assignment
//Demonstrate proper use of JavaScript primitives:
//A "primitive" is immutable data that is not an object and has no methods - they include: strings, numbers, booleans, null values, undefined values, and symbols. Ex:
var primitives = ["Volvo", 23, true, null, undefined, "#"];
console.log(primitives)


//Explain and demonstrate type conversion:
//JavaScript variables can be converted to a new variable and another data type by the use of a JavaScript function, or, automatically by JavaScript itself.
""+23 //Utilizes JavaScript's built-in functionality to stringify the number.


//Explain and demonstrate writing statements using keywords and primitives:
//JavaScript statements and declarations are use to execute various functionalities within an application, broady including control flow, declarations, functions, classes, iterations, as well as others.
//The following is an example of multiple JavaScript statements:
var a = "Potato";
var b = 23;
var c = true;
var d = null;
var e = undefined;


//Explain literals to represent values in JavaScript.
//It is a way to add name/value pairs within JavaScript programming.
//The following code is an example of an object literal within JavaScript (handy for JSON):
var dogNames = {
    dogOne: "Fluffy",
    dogTwo: "Woofy",
    dogThree: "Buddy"
};


//Explain the difference between using primitives and using an object that acts as a wrapper around the primitive data type (e.g. boolean).
//An object wrapper allows methods to be called on non-objects; whereas primitives, you cannot.
//Here is an example of the above:
var dogString = "I am a dog and I like to bark!";
var letter = dogString.charAt(0);