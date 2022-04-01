/*
||Negative Zero
    There are certain applications where a developer uses the magnitude of the value to represent one piece of information(speed) and the sign to represent another piece of information(direction).
    In such a case when the value arrives to zero we might lose the sign. In such a case negative zeros can be of great help
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
console.log(Math.sign(0))// 0
// Math.sign generally returns 1 or -1 indicating the sign but here it returns -0 so in this case it is not consistent
//! So use Object.is to identify negative zero
console.log(Object.is(a, -0)) // true
console.log(Object.is(a, 0)) // false
/*
Use Object.is for the special cases of equality such as NaN, -0 etc... For all other cases use == or ===
*/

//||Function to find isNegativeZero
function isNegativeZero(no){
    if(typeof no === "number" && (1/no) === -Infinity){
        return true
    }
    return false
}
console.log(isNegativeZero(-0))
//op=> true
console.log(isNegativeZero(+0)) 
//op=> false
console.log(isNegativeZero(0)) 
//op=> false


let no = -0/2
console.log(no);
//op => -0
