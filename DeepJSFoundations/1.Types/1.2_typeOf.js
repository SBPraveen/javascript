/*
|| typeof
    typeof helps us to find the type of the value stored in the variable (and not the typeof the variable).
    typeof returns us a string which is one of the primitive types( except "null") and additionally
    ! if the variable stores a function it returns a function.
    
 */


//* Eg:1
let v 
console.log(typeof v)
//op
// undefined
//||inference
// undefined doesn't mean "the variable has't been assigned a value yet" but what it really means is " the variable currently has no value" because the variable "v" could have had a value and due to some operations it would have got assigned to undefined

//* Eg:2
let a = [1, Infinity,  "js", true, {}, Symbol()]
a.map((i) => {
    console.log(typeof i)
})
//op
//number number string boolean object symbol

//! Eg:3
let q = [];
let w = () => {
    console.log("aa")
}
console.log(typeof q, typeof w, Array.isArray(q))
//op
// object function true
/*
Functions are subtypes of objects
Functions are also known as "callable objects" because they have an internal [[Call]] property that allows the functions to be called
Functions also have properties like length etc.
*/
let func = (no1, no2, no3) => {
    return no1 + no2 + no3
}
console.log( func.length);
//3
//!NOTE:
// Using .length on a function returns the number of parameters of that function

//* Eg:4
let value = null
console.log(typeof value) 
//! object
//This is a bug
//||So how do we find whether a value is null ??
if(!value && typeof value === "object"){
    console.log("The value is null");
}
//The value is null




//* Eg: 5
let value1 = 42n
console.log(typeof value1)
//bigint




