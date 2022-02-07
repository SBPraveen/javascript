/*
 Octal literal, are represented by prefixinf zero followed by a sequence of octal digits (from 0 to 7). 
*/
let a = 020
let b = 10
console.log(a+b)
//op => 26
/*
*Whattt ??🤔
    This is because JS considers "a" as a octal literal 
    020 => (0 * 8^2) + (2 * 8^1) + (0 * 8^0) => 16
    so a + b = 16 + 10 => 26 
*/

/*
If the octal literal contains a number that is out of range(above 8), JavaScript ignores the leading 0 and treats the octal literal as a decimal 
*/
let b = 059
console.log(b)
//op => 59


//!Note you can use the octal literals in non-strict mode. If you use them in strict mode, JavaScript will throw an error.


// if we want to consider octal as a number (ie remove the leading zeros)
let a = 043
let b = Number(a.toString(8))
console.log(b, typeof b)
//43 number

//convert octal into a number
let a = 043
console.log(Number(a))
// op => 35