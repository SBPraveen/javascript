import constructorFunction from "../../functions/constructorFunction"
import bitwiseOperator from '../../bitwiseOperators'

/*
*1. In javascript everything is an object 
    This statement is false since values like "true and "false" are not objects. But they can be represented in the form of an object.
    EG:
    */
let bool = true 
console.log(typeof bool);
let boolObj = new Boolean(true)
console.log(boolObj, typeof boolObj);
/*
boolean
[Boolean: true] object
*/
/** 
    Js has 8 built in types => 7 primitives + object

**2. Primitive types in javascript 
    1. undefined => This is the default valuein any variable or property if no other value is present
    2. string 
    3. number
    4. boolean
    5. symbol 
    6. null
    7. bigint

**3. 
Arrays, functions are subtypes of objects

**4. 
In javascript variables don't have types but it is the values that have types. So variables can hold any values at any time. The variable which was holding a value of the type number in the next assignment statement can hold a value of the type string.(This is not possible in languages like C where "int varName = 20" after which varName can hold only integers)

**5.
In JS the type of the value assigned to a variable decides whether the value stored is assign by value or assign by reference
In JS all the primitive types are value assignments(pass by value) whereas the non primitives(compound values) such as objects, arrays, functions etc are reference assignments(pass by reference)
*{@link bitwiseOperator}

**6. 
In a statically typed language the type of the variable is known at the compile time Eg: int a => in "C"
Whereas in a dynamically typed language, a variabl can receive different values at the runtime ans the type of the variable is known only at the runtime
Js is a dynamically typed language
 */
//*Dynamically typed language:
let val = true
console.log(val);
val = {
  name:"Praveen"
}
console.log(val);
//op =>
/*
true
{ name: 'Praveen' }
*/

//|| BigInt 
//*In essence, BigInt allows for storing large integers. If bigInts are not used, a large numeric literal would be converted into a floating point and lose precision of the least significant digits.
//A BigInt is created by appending n to the end of an integer literal or by calling the function BigInt().

//*When to use BigInt ??
/*
Anything below Number.MIN_SAFE_INTEGER and above Number.MAX_SAFE_INTEGER can be represented in BigInt
We will get a warning 
Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
*/
let no11 = 9999999999999999
console.log(no11 > Number.MAX_SAFE_INTEGER)
console.log(no11);
let no22 = 9999999999999999n
console.log(no22);
/*
true
10000000000000000
9999999999999999n
*/

let a1 = -123456781234567812345678123456781234567812345678123456781234567812345678
console.log(typeof a1, a1)
//op
// number 1.2345678123456781e+71

let no = -123456781234567812345678123456781234567812345678123456781234567812345678n
console.log(typeof no, no)
//op
// bigint 123456781234567812345678123456781234567812345678123456781234567812345678n

console.log(no+1)
//op
//! TypeError: Cannot mix BigInt and other types, use explicit conversions

let no1 = 10
console.log(no + BigInt(no1))
//op
// 123456781234567812345678123456781234567812345678123456781234567812345688n

console.log(Number(no));
//op =>
//1.2345678123456781e+71

//*BigInt for representation : ie how to remove the n in Bigint so that it can be represented to the users
let bint = 123456781234567812345678123456781234567812345678123456781234567812345678n
console.log(bint);
console.log(String(bint));
/*
123456781234567812345678123456781234567812345678123456781234567812345678n

123456781234567812345678123456781234567812345678123456781234567812345678
*/



//|| Symbols
/** 
 **ECMA Definition :
 The Symbol type is the set of all non-String values that may be used as the key of an Object property 
 Symbol which when used as a function (not as a constructor)  returns a symbol primitive.
 Symbols return a value that’s guaranteed to be unique(most of the cases)
 .
 The internal value of symbol is hidden from the code and cannot be obtained
 *{@link constructorFunction}
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
console.log(Symbol.toStringTag);

//! Eg:2
const sym11 = new Symbol()
//op => Type Error
/*
Symbol is a primitive type.  Its instances are mainly used as unique property keys.
An instance can only be created by using Symbol as a function. Using Symbol with the new operator will raise a TypeError.
This prevents programmers from creating an explicit Symbol wrapper object instead of a new Symbol value.
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
let symKey1 = Symbol("id1")
let symKey2 = Symbol("id2")
const student = {
    name:"praveen", 
    age : 21,
    [symKey1] : "This is the data that i don't want to loop",
    [symKey2] : "This is the data that i don't want to loop"
    //! enclose the key in square brackets => see inference
}
console.log(student)
for(let key in student){
console.log(key)
}
console.log(student.symKey1);
console.log(student.symKey2);
console.log(Object.getOwnPropertySymbols(student));
//op => 
/*
{
  name: 'praveen',
  age: 21,
  [Symbol(id1)]: "This is the data that i don't want to loop",
  [Symbol(id2)]: "This is the data that i don't want to loop"
}
name
age
undefined
undefined
[ Symbol(id1), Symbol(id2) ]
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
        return "user1Id 1234 Balance : 1200"
    case "6789":
        return "user2Id 6789 Balance : 20000"
    default:
        return "Unauthorized access"
}
}
console.log(bank(user1Id))
console.log(bank(user2Id))
console.log(bank(user3Id))
/*
op => 
user1Id 1234 Balance : 1200
user2Id 6789 Balance : 20000
user1Id 1234 Balance : 1200
 This can be solved by using symbols
*/
let user1IdSym = Symbol()
let user2IdSym = Symbol()
let user3IdSym = Symbol()
const bankNew = (user) => {
switch(user){
    case user1IdSym:
        return "user1Id 1234  Balance : 1200"
    case user2IdSym:
        return "user2Id 6789  Balance : 20000"
    default:
        return "Unauthorized access"
}
}
console.log(bankNew(user1IdSym))
console.log(bankNew(user2IdSym))
console.log(bankNew(user3IdSym))
/*
op => 
user1Id 1234  Balance : 1200
user2Id 6789  Balance : 20000
Unauthorized access
*/

//|| undefined
//undefined means a variable has been declared but has not yet been assigned a value
// undefined is not same as undeclared

//*eg1
let person = {name:"SB"}
console.log(person.age);
//op => undefined

//*eg2
let person1 
console.log(person1);
//op => undefined

//*eg3
let a121 = undefined//undefined is also a primitive datatype we can assign it to variable but this is a bad practice
console.log(a121);
//op => undefined

//*eg4
//Bug alert🤫🤫🤫

//? Eg 4.1
// let undefined = 1000000000000 
// console.log(undefined);
//op => 1000000000000

//? Eg 4.2
"use strict";
undefined = 2; 
console.log(undefined);
//op => TypeError

//? Eg 4.3
"use strict";
let undefined = 1000000000000 
console.log(undefined);
//op => 1000000000000

//? Eg 4.4
undefined = 1000000000000 
console.log(undefined);
//op => undefined

/*
In eg 4.1 and 4.3 we dont get an error because in both strict mode and non strict mode undefined when declared and assigned a value it will not rise an error.
But when we straight away assign a value to undefined in the strict mode the global undefined gets affected and thus in strict mode we will get a typeError
!Thus undefined can be used as a variable(buggy bug😔) whereas null cannot be used.
This is a bad practice and never to be used
*/

//|| null
//null can be assigned to a variable as a representation of no value. Thus null is used to represent the intentional absence of the value.
let unknownVal = null
console.log(unknownVal);
//op => null

//! NOTE : 
console.log(2 + null);
console.log(2 + undefined);
//op => 2 NaN

//||null vs undefined
/*
In short,
    null => empty value (or) had a value and doesnt anymore
    undefined => missing value (or) hasnt had a value yet
*/ 


//|| void operator
/*
The void operator voids out any value so the result of the expression is undefined.
!NOTE:
    It doesnt modify the existing value in the variable but it only ensures that the operator expression doesnt return anything
*/

let a = 10
console.log(void a, a);
void a
console.log(a);
//op=> undefined 10 
//     10



console.log(0.1 + 0.2 === 0.3);
let a123= 0.3
console.log(0.1 + 0.2  === a123);

