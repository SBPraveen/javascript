/*
*1. In javascript everything is an object 
    This statement is false since values like "true and "false" are not objects. 

*2. Primitive types in javascript 
    1. undefined
    2. string 
    3. number
    3. boolean
    4. object
    5. symbol 
    6. null
    7. bigint
So what about arrays => js considers them as the sub-type of the object

*3. 
All the primitive types mentioned above are not object whereas arrays, functions are objects

*4. 
In javascript variables don't have types but it is the values that have types

*5. 
Js is a dynamically typed language
 */

//* BigInt 
//||In essence, BigInt allows for storing large integers, as otherwise a large numeric literal would be converted into a floating point and lose precision of the least significant digits.
//A BigInt is created by appending n to the end of an integer literal or by calling the function BigInt().

let a = 123456781234567812345678123456781234567812345678123456781234567812345678
console.log(typeof a, a)
//op
// number 1.2345678123456781e+71

let b = 123456781234567812345678123456781234567812345678123456781234567812345678n
console.log(typeof b, b)
//op
// bigint 123456781234567812345678123456781234567812345678123456781234567812345678n

// console.log(b+1)
//op
//! TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(b + 1n)
//op
// 123456781234567812345678123456781234567812345678123456781234567812345679n


//* Symbols
/*
 Symbols return a value that’s guaranteed to be unique.
 Symbols are often used to add unique property keys to an object that won’t collide with keys any other code might add to the object.
*/

//*Eg: 1
const sym1 = Symbol()
const sym2 = Symbol()
console.log(sym1)
console.log(sym2)
console.log(sym1 === sym2)
/*
op => 
Symbol() 
Symbol() 
false
*/

//* Eg:2
const sym11 = new Symbol()
//op => Type Error
/*
Symbol is a primitive type.  Its instances are mainly used as unique property keys.
An instance can only be created by using Symbol as a function. Using Symbol with the new operator will raise a TypeError.
This prevents authors from creating an explicit Symbol wrapper object instead of a new Symbol value.
If "new Symbol()" is allowed then typeof sym11 will be an object 
*/