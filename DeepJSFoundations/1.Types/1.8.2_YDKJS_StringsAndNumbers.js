import bitwiseOperator from '../../bitwiseOperators'

//||STRINGS
/*
Strings are array liked.
Strings are immutable. So the use array of characters would be an alternate to do string operations.
*/

//*String Immutability
let val = "praveen"
val[0] = "v"
console.log(val);

val = [...val]
val[0] = "v"
console.log(val);

val = val.join("")
console.log(val);
/*
praveen
[
  'v', 'r', 'a',
  'v', 'e', 'e',
  'n'
]
vraveen
*/

//*Reversing a string
let str1 = "javascript"
let arr12 = [...str1]
arr12.reverse()
console.log(arr12.join(""));
//op => tpircsavaj

//*Alternate method (optimised)
let str = "javascript".split("")
console.log(str);//['j', 'a', 'v', 'a','s', 'c', 'r', 'i','p', 't']
str.reverse()
console.log(str.join(""));
//op => tpircsavaj

//|| NUMBERS
/*
Numbers in js include both integers as well as floating point values
 */

//*1.
//The leading and the trailing zeros in decimal numbers is optional
let no14 = .32
let no15 = 23. // 😐 not preferable
console.log(no14,no15);
//op => 0.32 23

//*2.
//Very large and very small nos by default will be converted to the exponential form
let no16 = 312354598127458971295719275175971985298475891724597
let no17 = 0.000000000000000000000000000003453
console.log(no16,no17);
//op => 3.12354598127459e+50   3.453e-30

//*3.
//The number of digits in a number can be limited by using toFixed/toPrecision
//! Both toFixed && toPrecision returns a string
let no18 = 0.0023140100
console.log(no18.toFixed(3));
console.log(typeof no18.toPrecision(3));
//op => 0.002  0.00231

//*4.
/*
How is it possible to access methods on a primitive value like a number?
  This happens because the number values are boxed with the number object wrapper. Thus we are accessing the method inside the number object wrapper 
*/

//*5.
//console.log(32.toFixed(3));
//SyntaxError
/*
Here the dot is interpreted as a decimal point.
So the fix is,
*/
console.log((32).toFixed(3));
//op => 32.000
/*
INTERPRETATION:
      Thus we don't necessarily need to use a variable with a value to access the methods inside the number object wrapper.
*/

//*6. 
console.log(32..toFixed(4));//avoid using these
//op => 32.0000
// This works because "32." gets transformed to 32 then the expression becomes  32.toFixed(4)

//*7. 
let a = 0123
console.log(a + 2);
//op => 85
//The reason is, a is considered as an octal 

//*8.🤨🤨🤨🤨🤨🤨🤨🤨🤨
console.log(0.1 + 0.2 === 0.3);
//op => false
//The comparison results to false because 0.1 + 0.2 equals to 0.30000000000000004 and 0.30000000000000004 not equals to 0.3
console.log(0.1 + 0.2);
//0.30000000000000004
/*
To solve this problem the most commonly accepted practice is to use a tiny rounding error value as a tolerance for comparison. This tiny rounding error value is known as the machine epsilon
In JS this is representes as Number.EPSILON(appox 2^(-52))
*/
let no21 = 0.1 + 0.2
let no22 = 0.3
let equalityChecker = (no21,no22) => {
  return Math.abs(no21 - no22) < Number.EPSILON
}
console.log(equalityChecker(no21,no22));
//op => true 😀

//*9.  Maximum & Minimum numbers
console.log(Number.MAX_VALUE);
//op => 1.7976931348623157e+308
console.log(Number.MIN_VALUE);
//op => 5e-324
//? NOTE: 
/*
Number.MIN_VALUE doesnt represent a negative number. Instead it represents a value which is very close to zero
Number can only safely represent integers between -2^53 and 2^53 - 1. Above or below the range it is preferable to use Bigint(preferable) or store the number as a string

*/
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
/*
-9007199254740991
9007199254740991
*/

//*10.
//Integers are positive and negative whole numbers
console.log(Number.isInteger(5));// true
console.log(Number.isInteger(-5));// true
console.log(Number.isInteger(5.0));// true
console.log(Number.isInteger(5.7));// false

//*11.
/** 
Bitwise operators are defined only for 32 bit numbers(meaning that it can pay attention to the first 32 bits and all other bits will be lost).
The range of 32 bit numbers is -2^31 to (2^31)-1. 
After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
*{@link bitwiseOperator}
*/

/*
1. How to check whether a number is 32 bit or not ?
  If the number is not within the above range then it is not a 32 bit numbers

2. How to convert a 64 bit number into a 32 bit number ??
  By doing the bitwise or of the number (since bitwise operators work on only 32 bit nos they return 0 for higher bit numbers)
  
*NOTE:
  NaN and Infinity are not “32-bit safe” ie those values when passed to the bitwise operator passes through the ToInt32 and gets coerced to an integer and will simply become 0
*/

//64 bit to 32 bit 

let to32BitNumber = (no) => {
    return (no|0)
  }
let no1 = Math.pow(2,31) -1
console.log(no1, to32BitNumber(no1));
//2147483647  2147483647
let no2 = Math.pow(2,35) 
console.log(no2, to32BitNumber(no2));
//34359738368 0
let no3 = Math.pow(2,0) 
console.log(no3, to32BitNumber(no3));
//1 1
let no4 = Math.pow(-2,31) 
console.log(no4, to32BitNumber(no4));
//-2147483648 -2147483648
let no5 = Math.pow(-2,36) 
console.log(no2, to32BitNumber(no2));

//*12. Infinity

console.log(30 < Infinity); // true
console.log(30 > -Infinity); //true

let no23 = 100/0
console.log(no23);
//op => Infinity

let no24 = -100/0
console.log(no24);
//op => -Infinity

let no25 = -100/-0
console.log(no25);
//op => Infinity

/*
In other languages such as C we would have got a "Divide by zero" error but in JS this is a well defined action
*/

let no26 = Number.MAX_VALUE
console.log(no26 + no26);
//op => Infinity

/*
!NOTE:
  Unlike in mathematics in JS we get infinity even with an operation like addition and subtraction
  Reason:
    According to the specs if an operation like addition results in a value that is too big to represent then "round to the nearest" and the value produced by no26 + no26 is nearest to infinity and thus the answer
*/

let no27 = Infinity/Infinity
console.log(no27);
//op => NaN
/*
Even in mathematics this is undefined
  Infinity / Infinity !== 1
  Proof :
    Assume that Infinity / Infinity = 1
    Infinity + Infinity = 2*Infinity
    Infinity + Infinity = Infinity
    (Infinity/Infinity)+(Infinity/Infinity) = 1
    1 + 1 = 1
    Thus proved Infinity/Infinity !== 1
*/

let no28 = 43/Infinity
console.log(no28);
//op => 0
let no29 = -43/Infinity
console.log(no29);
//op => -0

 