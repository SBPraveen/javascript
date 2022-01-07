/*
||Negative Zero
    *Assume we are making car game
        In this case the absolute value of the number represents how much distance the vehicle has travelled and the sign indicates the direction.
        + => vehicle is travelling in the north direction 
        - => vehicle is travelling in the south direction 
        if we want to initialize a vehicle in the south direction then -0 can be useful
    *Usage
        share prices
        maps
        racing games
        
*/
let a = -0
console.log(a === 0) // true
console.log(a == 0) // true
console.log(a < 0) // false
console.log(a > 0) // false
console.log(Math.sign(a))// -0
// Math.sign generally returns 1 or -1 indicating the sign but here it returns -0 so in this case it is not consistent
//! So use Object.is to identify negative zero
console.log(Object.is(a, -0)) // true
console.log(Object.is(a, 0)) // false


