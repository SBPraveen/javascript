/*
The Set object lets you store unique values of any type, whether primitive values or object references.
A value in the Set may only occur once; it is unique in the Set's collection.
*/
let a = [1,2,1,"a","f",2,1,1,"a","f", true, null,undefined,null,{a: 1, b: 2},{a: 1, b: 2}] 
let newSet = new Set(a)
newSet.add(1)
console.log(newSet)
console.log(newSet.has(1))
newSet.delete(1)
console.log(newSet)
newSet.clear()
console.log(newSet)
/*
op=>
Set(9) {
  1,
  2,
  'a',
  'f',
  true,
  null,
  undefined,
  { a: 1, b: 2 },
  { a: 1, b: 2 }
}
true
Set(8) {
  2,
  'a',
  'f',
  true,
  null,
  undefined,
  { a: 1, b: 2 },
  { a: 1, b: 2 }
}
Set(0) {}
*/

//|| Use case 1
// * Use "set" to remove duplicate primitive elements from an array
let a = [1,2,1,"a","f",2,1,1,"a","f", true, null,undefined,null] 
let b = [... new Set(a)]
console.log(b)
// [ 1, 2, 'a', 'f', true, null, undefined ]

//|| Use case 2
// * Use "set" to remove duplicate elements(both primitive and objects) from an array
let a = [1,2,1,"a","f",2,1,1,"a","f", true,null,null, NaN,{a: 1, b: 2},{a: 1, b: 2}] 
let b = [... new Set(a.map(JSON.stringify))].map(JSON.parse)
console.log(b)
//[ 1, 2, 'a', 'f', true, null, { a: 1, b: 2 } ]
//!Note Doesn't work if the array consists of undefined 
// Error => Unexpected token u in JSON at position 0
// Reason => undefined , Functions and Symbols are not valid JSON values. So JSON.parse will not work
//! Also NaN will not be there in the output
//? Explanation
let a = [1,2,1,"a","f",2,1,1,"a","f", true,null,null,undefined, NaN,{a: 1, b: 2},{a: 1, b: 2}] 
console.log(a.map(JSON.stringify))
/*
[
  '1',             '2',
  '1',             '"a"',
  '"f"',           '2',
  '1',             '1',
  '"a"',           '"f"',
  'true',          'null',
  'null',          undefined,
  'null',          '{"a":1,"b":2}',
  '{"a":1,"b":2}'
]
*/
console.log(new Set(a.map(JSON.stringify)))
/*
Set(8) {
  '1',
  '2',
  '"a"',
  '"f"',
  'true',
  'null',
  undefined,
  '{"a":1,"b":2}'
}
*/
console.log([...new Set(a.map(JSON.stringify))])
// op => [ '1', '2', '"a"', '"f"', 'true', 'null', undefined, '{"a":1,"b":2}' ]

// JSON.parse doesnt work if  the input consists of undefined so uncomment the below input "a"
let a = [1,2,1,"a","f",2,1,1,"a","f", true,null,null, NaN,{a: 1, b: 2},{a: 1, b: 2}] 
console.log([...new Set(a.map(JSON.stringify))].map(JSON.parse))
//[ 1, 2, 'a', 'f', true, null, { a: 1, b: 2 } ]