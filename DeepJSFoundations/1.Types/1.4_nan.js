/*
|| NaN => represents an invalid no
*/

//* Eg:1
let a = Number("do you know me??")
console.log(a)
//op => NaN

//* Eg:2
//Any mathematical operation with NaN results in a NaN
console.log(4 + NaN)
//op => NaN

//* Eg:3
//! NaN doesnt equal to itself whereas undefined equals to itself
let a1 = Number("do you know me??")
let a2 = Number("do you know me??")
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

//* Eg:4
//! Dont use isNaN use Number.isNaN
let a = "do you know me??"
let c = Number(a) + 1 
console.log(c) // NaN
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


//|| Usage
let a = [1,2,3,4,5]
console.log(a.indexOf(10))
// op => -1
// Here instead of returning -1 it would be more appropriate to return an NaN if JS couldn't find the element(because returning an invalid no would be more appropriate than returning -1)