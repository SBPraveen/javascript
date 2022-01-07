/*
In js type conversions are known as coercion
*/

//*Eg:1
let a = "praveen"
console.log(a.length)
//op => 7
/*
Here the variable "a" is a primitive(string) and only objects have methods like "length".
So how did a primitive have .length method??
This is because JS implicitly coerces the primitive string into an object when it encounters "a.length"
*/

//*Eg:1.1
let a = 16
console.log(typeof a.toString())
//op => string
/*
Here the variable "a" is a primitive(number) and only objects have methods like "toString()".
So how did a primitive have toString method??
This is because JS implicitly coerces the primitive number into an object when it encounters "a.toString"
*/

//*Eg:2
if([])
console.log("Executed")
// op => Executed
/*
Here JS implicitly converts an empty array(truthy value) into a boolean 'true'
*/

//* Eg:3
let age = 22
console.log(`My age is ${age}`)
// op => My age is 22
/*
Here JS implicitly converts a number(22) into a string 
*/

//* Eg:4
let arr = []
if(arr)//coercion
arr.push(4)
console.log(arr)
// op => [ 4 ]
/*
Here JS implicitly converts an array into a boolean 
*/

//* Eg:5
let str = "      "
if(str)
console.log("Praveen"+ str + "ssn")
//op => Praveen      ssn

//* Eg:1 => Explicit coercion
let arr = [12, " is ", "my ", "lucky ", "number"]
console.log(typeof arr.join(""), arr.join(""))
// op => string 12 is my lucky number
/*
Here I'm explicitly converting the array arr into string
*/

//* Eg:2 => Explicit coercion
let num = 12
console.log(`My age is ${String(num)}`)
// op => My age is 12
/*
Here I'm explicitly converting a number into a string
*/

//* Eg:3 => Explicit coercion
let a = "1", b=[1,2,3]
console.log(+a, typeof (+a), +b)
//op=> 1 number NaN
/*
Unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.
The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
*/
//Here I'm explicitly converting a string into a number