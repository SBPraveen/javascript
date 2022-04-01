/*
||Equality comparisons and sameness
 *double equals (==) 
 will perform a type conversion when comparing two things, and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0);
triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned.
Object.is does no type conversion and no special handling for NaN, -0, and +0 (giving it the same behavior as === except on those special numeric values).
*/
//|| === vs object.is
console.log(Object.is(NaN, NaN)) //true
console.log(NaN === NaN) //false
console.log(Object.is(-0,+0)) //false
console.log((-0) === (+0)) //true

/*
||Summary of ==
    1. If the types are the same then ===
    2. If null or undefined => equal
    3. If one of the value is non primitive coerce it to primitive
    4. Always == prefers toNumber 
*/
//|| Corner case : 

//* case 1
console.log([] == ![]);
//op => true🤯
// But this case we will probably not be using
/*
[] == false
"" == false ( toPrimitive([]) => "")
0 == false
0 == 0
0 === 0
true
*/

//* case 2
let a = []
if(a){
    console.log("block 1");
}
if(a == true){
    console.log("block 2");
}
if(a == false){
    console.log("block 3");
}
//op =>
// block 1
// block 3
/*
Block1 => Here block 1 gets executed because empty array gets coerced to true since [] is a truthy value
Here Block 2 doesnt get executed. Check the steps below.
*/
//s1 true gets coerced to a number
console.log([] , Number(true))
//[] , 1
//s2 Array gets coerced to a primitive
console.log([].toString());
//""(we get an empty string)
//  Now the comparison is reduced to "" == 1
// Empty string gets coerced to a number
console.log(Number(""));
//So the final comparison is 0 == 1 
console.log(0 === 1);
//false
//*conclusion
/*
Allow the toBoolean to happen implicitly
*/

//||Avoid ==
/*
Avoid == for the following cases :
    1. When either side can be 0, empty string or a string with only white spaces.
    2. Dont use == with non-primitives
    3. x == true (or) x == false. When we want the comparison to match exactly true or false go with ===(Eg : case2)
*/

//||Summary :
/*
Use == when the types are obvious and fall back to === when the types are not known for sure.
== allows coercion while === doesnt allow coercion
*/


//||use case 1

ip = undefined
if(ip === null || ip === undefined){
    console.log(ip);
}
if(ip == null ){
    console.log(ip);
}
