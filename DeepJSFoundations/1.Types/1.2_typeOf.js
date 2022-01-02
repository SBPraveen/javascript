/*
|| typeof
    typeof helps us to find the type of the value stored in the variable "v".
    typeof returns us a string which is one of the primitive types( except "null") and additionally
    ! if the variable stores a function it returns a function
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
// object function

//* Eg:4
let asd = null
console.log(typeof asd) 
//! object
//This is a bug

//* Eg: 5
let aja = 42n
console.log(typeof aja)
//bigint


let a1 = new String("praveen")
console.log(a1)