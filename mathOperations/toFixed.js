//Used to have specified number of decimal digits
//!NOTE this returns a string => so use Number or parseFloat
let num = 5.56789;
let numString = num.toFixed(2);
let numFloat1 = Number(numString)
let numFloat2 = parseFloat(numString)

console.log(numString, typeof numString )
//5.57 string

console.log(numFloat1, typeof numFloat1 )
//5.57 number

console.log(numFloat2, typeof numFloat2 )
//5.57 number