//|| ToString
/*
Converts the value into a string
*/

//? Eg1:
let a1 = [true, 3.14, 0, -0, -3]
for(let i of a1){
    let s = String(i)
    console.log(s, typeof s )
    console.log(i.toString(), typeof i.toString())
}
/*
op =>
true string
true string
3.14 string
3.14 string
0 string
0 string
0 string
0 string
-3 string
-3 string
*/
//! negative zero when converted to a string becomes zero

//? Eg2: special cases
let str = [null, undefined, NaN]
for(let i of str){ 
    let s = String(i)
    console.log(s, typeof s)
}
/*
op => 
null string
undefined string
NaN string
*/

let str1 = null
console.log(str1.toString())
//op => Cannot read properties of null

let str2 = undefined
console.log( str2.toString())
//op => Cannot read properties of undefined 

let str3 = NaN
console.log(str3.toString())
//op => NaN

/*
*Inference:
value.toString() will cause an error if value is null or undefined. String(value) should not.     
This is because when we try to use toString() on  null or undefined the value is boxed and even after that js is not able to locate the method toString so throws an error.
So the best way to convert a value to a string is to use the String method or add the value with an empty string.
*/

console.log(null+'')
// op => null

/*
*NOTE
.toString() and String() can be called on primitive values(number,boolean,string) and basically will do nothing special:

true => 'true'

false => 'false'

17 => '17'

'hello' => 'hello'

Briefly summarized, when converting from Object-to-String, the following steps are taken:

s1 => If available, execute the toString method.
If the result is a primitive, return result, else go to Step 2.
s2 => If available, execute the valueOf method.
If the result is a primitive, return result, else go to Step 3.
s3 => Throw TypeError.
 */


//? Eg3: Arrays
let a2 = []
console.log(a2.toString());
//op => ""

let a3 = [null]
console.log(a3.toString());
//op => ""

let a4 = [1,2,3]
console.log(a4.toString());
//op => 1,2,3

let a5 = ["-0"]
console.log(a5.toString());
//op => "-0"

let a6 = [null, undefined, NaN]
console.log(a6.toString());
//op => ,,NaN

let a7 = [[], [], []]
console.log(a7.toString());
//op => ,,

//? Eg3: Objects
let a8 = {a:2}
console.log(a8.toString());
console.log(String(a8));
// op => 
// [object Object]
// [object Object]

//!NOTE : 
//If we need to convert an object to a string (and we dont want the output to be [object Object] ) then use JSON.stringify or override the toString method(not recomended)

//? Eg4: JSON.stringify for converting an object to a string
let s = {a:2}
let as = JSON.stringify(s)
console.log(as, typeof as);
//op => {"a":2} string

//? Eg5: Override the toString method
let a = {}
a.toString = () => {
    return "This is an object"
}
console.log(new String(a));
// op =>  [String: 'This is an object']

//!JSON SAFE
/*
undefined, functions, symbols and objects with circular references are not JSON safe ie JSON.stringify will automatically omit these values(incase of objects) or replace them with null(Incase of arrays) when it comes across them.
If  objects with circular references it will throw an error
*/

//*Eg1 : json unsafe values in an object
let obj = {
    name: undefined,
    id: Symbol(),
    age: 21,
    action: () => {
        return "My super power is that I can be invisible"
    }
}
console.log(JSON.stringify(obj));
/*
*OP=>
{"age":21}
*Inference:
    If JSON.stringify comes across an object value that is not JSON safe then that entire property will be removed
*/

//*Eg2 : objects with circular references
let obj1 = {
    name:"obj1"
}
// creating a circular reference
obj1.circular = obj1
console.log(obj1);
/*
*op =>
<ref *1> { name: 'obj1', circular: [Circular *1] }
*/
console.log(JSON.stringify(obj1));
/*
*op =>
!TypeError: Converting circular structure to JSON   
*/
let arra1 = [1,2,obj1, 3]
console.log(JSON.stringify(arra1));
/*
*op =>
!TypeError: Converting circular structure to JSON   
*/


//*Eg3 Arrays
let arra = [1, undefined, Symbol(), ()=>{}]
console.log(JSON.stringify(arra));
/*
op => 
[1,null,null,null]
*/