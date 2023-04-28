/*
||Arrays : 
    JS arrays are containers to store any type of values
    Eg: [1, "2", [1,2,3]]
*/


//* Delete an element from the array
let arr14 = [11,12,13,14,15,16]
delete arr14[2]
delete arr14[4]
console.log(arr14);
console.log(arr14.length, "=> length");
for(let i of arr14){
    console.log(i)
}
/*
[ 11, 12, <1 empty item>, 14, <1 empty item>, 16 ]
6 => length
11
12
undefined
14
undefined
16

*/

//!NOTE:
//Deleting an element from the array will not update the length property

//* Sparse arrays(Arrays that have empty slots)
let arr = []
arr[0] = 123
arr[2] = 234
console.log(arr);
//op => [ 123, <1 empty item>, 234 ]

//?Eg2
let ary = [undefined, undefined, undefined]
let ary1 = ary.map((val) => {
  return val 
})
console.log(ary);
console.log(ary1);

//* Combine two arrays into a single array with no duplication
 let ar1 = [1,2,3,4]
 let ar2 = [3,4,5,6]
let tempSet = new Set([...ar1,...ar2])
let result = [...tempSet]
console.log(result);


//*Array index can also be a string(since arrays are objects)
//NOTE : This is a bad practice
let arr1 = []
arr1[0] = 10
arr1["twenty"] = 20
arr1[2] = 30
arr1["3"] = 40 //!The string 3 gets coerced to a number and becomes a numeric index
console.log(arr1);// [ 10, <1 empty item>, 30, 40, twenty: 20 ]
for(let i in arr1){
    console.log(i);
}
//0
//2
//3
//twenty
console.log(arr.length);//4

//* Delete all the values in the array
let array = [1,2,3,4,5]
array.length = 0
console.log(array);
//op=> []

const shallowAndDeepCopy = () => {
/*
||Shallow copy
  In a shallow copy both the duplicate and the original point to the same location thus changes made to the duplicate affect the original(in non primitives).
  For primitive values both the original and the duplicate are disconnected.
*/

//*shallow copy of non primitives
let original12 = [1,2,3,4,5]
let duplicate12 = original12
duplicate12.push(11,12)
console.log(original12);
console.log(duplicate12);
/*
OP=> [
  1,  2,  3, 4,
  5, 11, 12
]
[
  1,  2,  3, 4,
  5, 11, 12
]
*/

//*shallow copy of primitives
let val1 = 2
let val2 = val1
console.log(val1,val2);
val2 = ++val2
console.log(val1,val2);
//op =>
/*
2 2
2 3
*/

//|| How values gets stored in the memory location
//? Eg1
let arrOrginal = [1,3,2,5,4]
let arrDuplicate = arrOrginal
console.log(arrOrginal);
console.log(arrDuplicate);
/*
[ 1, 3, 2, 5, 4 ]
[ 1, 3, 2, 5, 4 ]
*/
arrDuplicate.push(100)
console.log(arrOrginal);
console.log(arrDuplicate);
/*
[ 1, 3, 2, 5, 4, 100 ]
[ 1, 3, 2, 5, 4, 100 ]
*/
arrDuplicate = [123,334,234,236]
console.log(arrOrginal);
console.log(arrDuplicate);
/*
[ 1, 3, 2, 5, 4, 100 ]
[ 123, 334, 234, 236 ]
*/
arrOrginal = [12,23,34,45,56,67]
console.log(arrOrginal);
console.log(arrDuplicate);
/*
[ 12, 23, 34, 45, 56, 67 ]
[ 123, 334, 234, 236 ]
*/

//? Eg2
let foo = (arr) => {
  console.log(arr); //[ 1, 2, 3, 4 ]
  arr.push(4)
  console.log(arr); // [ 1, 2, 3, 4, 4 ]
}
let arr1 = [1,2,3,4]
foo(arr1)
console.log(arr1); // [ 1, 2, 3, 4, 4 ]

//? Eg3
let foo1 = (arr) => {
  console.log(arr); //[ 1, 2, 3, 4 ]
  arr = [12,23,34,45]
  console.log(arr);// [ 12, 23, 34, 45 ]
  arr.push(67)
  console.log(arr); //[ 12, 23, 34, 45, 67 ]
}
let arr41 = [1,2,3,4]
foo1(arr41)
console.log(arr41); // [ 1, 2, 3, 4 ]
//?The above problem can be solved as follows
let foo12 = (arr) => {
  console.log(arr); //[ 1, 2, 3, 4 ]
  arr = [12,23,34,45]
  console.log(arr);// [ 12, 23, 34, 45 ]
  arr.push(67)
  console.log(arr); //[ 12, 23, 34, 45, 67 ]
  return arr
}
let arr412 = [1,2,3,4]
arr412 = foo12(arr412)
console.log(arr412); //[ 12, 23, 34, 45, 67 ]
/*

In JS when variables are assigned with  non primitives then they become a reference that points at a (shared) value
In other programming languages such as C we have pointers and a reference is just an alias or an alternate name to an existing variable.
But in JS there are no pointers and references work a bit differently ie. they point only at the contained value and not at other variables or references and this is the reason why in Eg:3 when we assigned [12,23,34,45] to arr inside the function foo1, arr41 didnt get affected. 

Assume that there are two variables a and b
let a = [1,2,3,4]
let b = a
? Neither a nor b owns the array [1,2,3,4] but both a and b are just equal peer references to the array [1,2,3,4]
                                a
                                ⬇️
                              [1,2,3,4] ⬅️ b
b.push(5) //since a and b are pointing to the same array the change gets affected in both a and b.
                                a
                                ⬇️
                              [1,2,3,4,5] ⬅️ b
 b = [12,13,14] //when b is assigned with a new array it detaches itself from [1,2,3,4,5] and b now points to [12,13,14] 
                                 a
                                 ⬇️
                              [1,2,3,4,5]  b ➡️ [12,13,14]                
b.push(16)//Now the changes made to the array pointed by b doesn't affect a
                                 a
                                 ⬇️
                              [1,2,3,4,5]  b ➡️ [12,13,14,16]

a = [21, 22, 23, 24]
                                 a ➡️ [21, 22, 23, 24]
                                 
                              [1,2,3,4,5]  b ➡️ [12,13,14,16]
The array [1,2,3,4,5] is cleaned up by the garbage collector since no variable is pointing to it.
?Garbage Collector:
  !Whenever we assign a new value to a variable both primitive as well as non primitive the new value gets stored in a new memory location and the variable now points at the new location and the old value gets cleared by the garbage collector
  Low level languages such as C use explicit garbage collection using methods such as malloc() and free() while high level languages such as JS the browser does automatic garbage collecion.
  In JS garbage collection is done using the Reference Counting Algorithm and the Mark and Sweep Algorithm.
*/

//*Reference Eg:4
let a = (no) => {
  console.log("inside the function a before incrementing =>",no);
  no =  no + 1
  console.log("inside the function a after incrementing =>", no);

}
let num1 = new Number(10)//not a good practice
console.log(num1 , typeof num1);
a(num1)
console.log(num1);
/*
op => 
[Number: 10] object
inside the function a before incrementing => [Number: 10]
inside the function a after incrementing => 11
[Number: 10]
Explanation :
  When a(num1) is called both no and num1 points to the same reference.
                num1
                 ⬇️
              [Number: 10] ⬅️ no
  But when the command "no = no + 1" gets executed no gets coerced from an object to a number(primitive)
  So after "no = no + 1"
                num1
                 ⬇️
              [Number: 10]  no ➡️ 11

*/

/*
||Deep copy
  In deep copy all the values of the new variables are copied and are disconnected from the original values.
*/
//*deep copy
let original = [1,2,3,4,5]
let duplicate = [...original]
duplicate.push(11,12)
console.log(original);
console.log(duplicate);
/*
op =>
[ 1, 2, 3, 4, 5]
[1,  2,  3, 4, 5, 11, 12]
*/

//*nested objects/arrays
/*
The spread operator fails when we are using nested arrays
*/
let original1 = [[1,2], [3,4], [5,6]]
let duplicate1 = [...original1]
duplicate1[0].push(11,12)
console.log(original1);
console.log(duplicate1);
/*
op=>
[ [ 1, 2, 11, 12 ], [ 3, 4 ], [ 5, 6 ] ]
[ [ 1, 2, 11, 12 ], [ 3, 4 ], [ 5, 6 ] ]
*/

//*solution for nested objects/arrays

let original2 = [[1,2], [3,4], [5,6]]
let duplicate2 = JSON.parse(JSON.stringify(original2)) 
duplicate2[0].push(11,12)
console.log(original2);
console.log(duplicate2);
/*
op=>
[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
[ [ 1, 2, 11, 12 ], [ 3, 4 ], [ 5, 6 ] ]
*/
}
//|| Array like
/*
An array like is an object that has indexed properties(ie its keys are 1,2,3....) and also has a length property.
But the downside is it doesnt have array methods like push, pop, join, map etc
Eg:
*/
let arrLike = {
    0:"sam",
    1:45,
    2:"billings",
    3:[1,2,3],
    length:4
}
// console.log(arrLike.1);
//!Note : This throws an syntax error
//The correct way to access is
console.log(arrLike[1]); //op => 45

//? When do we get array like objects??
/*
JS HTMLCollection is an array like object
ie. consider the following html
<div id="main">
  <ul>
    <ol type="listOrdered">
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ol>
  </ul>
</div>

document.getElementsByTagName('li') => This returns me an array like object
 */

//*Array like can be converted into an array using Array.from()
/*
The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
*/
let arrLike1 = {
  0:"sam",
  1:45,
  2:"billings",
  3:[1,2,3],
  length:4
}
let arr = Array.from(arrLike1)
console.log(arr);
//op => [ 'sam', 45, 'billings', [ 1, 2, 3 ] ]

export {shallowAndDeepCopy}