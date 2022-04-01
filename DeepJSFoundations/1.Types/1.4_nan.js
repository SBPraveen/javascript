/*
|| NaN => 
NaN=> Not a Number doesn't necessarily mean the value is not a number instead it represents an invalid number or a bad number or a failed number.
But by all means NaN is a number and to prove it, the typeof NaN is also a number.
Since NaN is not equal to itself use Number.isNaN or Object.is to find whether a variable holds a NaN or not
*/

//* Eg:1
let val = 1/"asdf"
console.log(val)
console.log(typeof val);
/*
op=> 
NaN
number
*/

//* Eg:2
//Any mathematical operation with NaN results in a NaN
console.log(4 + NaN)
//op => NaN

//* Eg:3
//! NaN doesnt equal to itself whereas undefined equals to itself
let a1 = 1/"asdf"
let a2 = 5/"asdf"
console.log(a1,a2)
console.log(a1 === a2)
console.log(a1 == a2)
/*
NaN NaN 
false
false
*/
let s = undefined
let d = undefined
console.log(s, d, s===d, s==d)
/*
undefined undefined true true
*/

//* Eg:4 Identifying NaN
//! Dont use isNaN use Number.isNaN
let a = "do you know me??"
let c = Number(a) + 1 
console.log(c) // NaN
console.log(isNaN(c)) // true
console.log(typeof a) // string
console.log(isNaN(a)) // true
/*
true => eventhough a is a string JS evaluates isNaN(a) as true because isNaN converts the input as a Number and then only checks if it is a NaN
    console.log(isNaN(a)) 
    console.log(isNaN(Number(a))) 
    console.log(isNaN(NaN)) 
This can be overcome by using Number.isNaN
*/
console.log(isNaN(c)) // true
console.log(Number.isNaN(a)) // false
console.log(Number.isNaN(c)) // true
console.log(typeof c)
//! typeof NaN is a number
// This is probably one of the reasons to think of NaN as an invalid number rather than "not a number"

let no1 = NaN
console.log(Object.is(no1, NaN));
//op => true


//|| Usage
let a22 = [1,2,3,4,5]
console.log(a22.indexOf(10))
// op => -1
// Here instead of returning -1 it would be more appropriate to return an NaN if JS couldn't find the element(because returning an invalid no would be more appropriate than returning -1)


//||Real life example: Why we have to use Number.isNaN
/**
 * Task : 
   You will be provided with an array and we should display the values to the user.
   Array => [12, "twenty", NaN, 15, "one"]
   In this case displaying NaN to the user is undesirable. So we are removing it out.
 */
let arr = [12, "twenty", NaN, 15, "one"]
let filteredArr = arr.filter((number) => {
    return !isNaN(number)
}) 
console.log(filteredArr);
//op => [ 12, 15 ]
/*
Here when we see "twenty" and "one" is also gone which is not the requirement.
This happens because if the "typeof number" is other than a number then it coerces it to a number. Thus the strings become NaN.
The solution is Number.isNaN
*/
let arr1 = [12, "twenty", NaN, 15, "one"]
let filteredArr1 = arr1.filter((number) => {
    return !Number.isNaN(number)
}) 
console.log(filteredArr1);
//op => [ 12, 'twenty', 15, 'one' ]
