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

//! Eg:2
const sym11 = new Symbol()
//op => Type Error
/*
Symbol is a primitive type.  Its instances are mainly used as unique property keys.
An instance can only be created by using Symbol as a function. Using Symbol with the new operator will raise a TypeError.
This prevents authors from creating an explicit Symbol wrapper object instead of a new Symbol value.
If "new Symbol()" is allowed then typeof sym11 will be an object 
*/

//* Eg:3
const asdf = Symbol("praveen")
const jkl = Symbol.for("unifo")
console.log(asdf, jkl)
// op => Symbol(praveen) Symbol(unifo)
//here praveen basically acts as a label. This is useful to identify a symbol when we have a bunch of symbols 

//* Use-case:1
/*
Symbols are often used to add unique property keys to an object that won’t collide with keys any other code might add to the object.(ie. The for...in loop does not iterate over a key which is of the type symbol)
*/
let symKey = Symbol("id")
const student = {
    name:"praveen", 
    age : 21,
    [symKey] : "This is the data that i don't want to loop"
    //! enclose the key in square brackets => see inference
}
console.log(student)
for(let key in student){
console.log(key)
}
//op => 
/*
{
  name: 'praveen',
  age: 21,
  [Symbol(id)]: "This is the data that i don't want to loop"
}
name
age
*/
/*
INFERENCE:
!!!!!square brackets allows us to use variables as keys inside the object.
*/
let name = "Praveen"
let obj1 = {
    name:"This key is my name"
}
console.log(obj1)
//op => { name: 'This key is my name' }
let name11 = "Praveen"
let obj11 = {
    [name11]:"This key is my name"
}
console.log(obj11)
//op => { Praveen: 'This key is my name' }

//* Use-case:2

let user1Id = '1234'
let user2Id = '6789'
let user3Id = '1234'//assume that by mistake two users are assigned the same id
const bank = (user) => {
switch(user){
    case "1234":
        return "user1Id 1234"
    case "6789":
        return "user2Id 6789"
    default:
        return "user3Id"
}
}
console.log(bank(user1Id))
console.log(bank(user2Id))
console.log(bank(user3Id))
/*
op => 
user1Id 1234
user2Id 6789
user1Id 1234 
Instead of "user3Id" we got "user1Id 1234 ". This can be solved by using symbols
*/
let user1Id = Symbol()
let user2Id = Symbol()
let user3Id = Symbol()
const bank = (user) => {
switch(user){
    case user1Id:
        return "user1Id 1234"
    case user2Id:
        return "user2Id 6789"
    default:
        return "user3Id"
}
}
console.log(bank(user1Id))
console.log(bank(user2Id))
console.log(bank(user3Id))
/*
op => 
user1Id 1234
user2Id 6789
user3Id
*/