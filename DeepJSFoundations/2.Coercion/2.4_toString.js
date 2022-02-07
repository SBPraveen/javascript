//|| ToString
/*
Converts the value into a string
*/

//? Eg1:
let a = [true, 3.14, 0, -0, -3]
for(let i of a){
    let s = new String(i)
    console.log(s, typeof s )
    console.log(i.toString(), typeof i.toString())
}
/*
op =>
[String: 'true'] object
true string
[String: '3.14'] object
3.14 string
[String: '0'] object
0 string
[String: '0'] object
0 string
[String: '-3'] object
-3 string
*/
//! negative zero when converted to a string becomes zero

//? Eg2: special cases
let str = [null, undefined, NaN]
for(let i of str){ 
    let s = new String(i)
    console.log(s, typeof s)
}
/*
op => 
[String: 'null'] object
[String: 'undefined'] object
[String: 'NaN'] object
*/

let str1 = null
str1.toString()
console.log(str1)
//op => Cannot read properties of null

let str2 = undefined
str2.toString()
console.log( str2)
//op => Cannot read properties of undefined 

let str3 = NaN
str3.toString()
console.log(str3)
//op => NaN

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

value.toString() will cause an error if value is null or undefined. new String(value) should not.     
This is because the values without properties like null or undefined the new String doesnt use the value.toString() instead it uses the operation ''+value.
 */

console.log(null+'')
// op => null

//? Eg3: Arrays
let a = []
console.log(a.toString());
//op => ""

let a = [null]
console.log(a.toString());
//op => ""

let a = [1,2,3]
console.log(a.toString());
//op => 1,2,3

let a = ["-0"]
console.log(a.toString());
//op => "-0"

let a = [null, undefined, NaN]
console.log(a.toString());
//op => ,,NaN

let a = [[], [], []]
console.log(a.toString());
//op => ,,

//? Eg3: Objects
let a = {a:2}
console.log(a.toString());
console.log(new String(a));
// op => 
// [object Object]
// [String: '[object Object]']

//!NOTE : 
//If we need to convert an object to a string (and we dont want the output to be [String: '[object Object]'] ) then use JSON.stringify or override the toString method(not recomended)

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