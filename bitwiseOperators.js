let bitwiseOperator
export default bitwiseOperator 

/*
||Bitwise operators
A bitwise operator treats their operands as a set of 32 bits (zeros and ones).
& - Bitwise And
| - Bitwise Or
^ - Bitwise Xor
~ - Bitwise Not
<< - Zero fill left shift
>> - Signed right shift
>>> - Zero fill right shift
*/

//?Convert decimal numbers to binary numbers (even octals)
let no1 = 5
console.log(no1.toString(2));
//op => 101
//*The above output is a string

let no2 = 55
console.log(no2.toString(8));
//op => 67

//?Convert binary numbers to decimal numbers 
let no3 = "101"
console.log(parseInt(no3, 2));
//op => 5
/*
parseInt takes two parameter => first argument specifies the string which we want to convert to decimal and the second argument specifies the base in which the string is represented
*/

//* Bitwise And
console.log(5 & 1);
//op => 1
//explanation => 0101 and 0001 = 0001 => 1

//* Bitwise Or
console.log(5 | 1);
//op => 5
//explanation => 0101 or 0001 = 0101 => 5

//* Bitwise Xor
// The result is 1 only if the bits are different
console.log(5^1);
//op => 4
//explanation => 0101 xor 0001 = 0100 => 4
//* Bitwise Not
//inverts the bits
console.log(~5);
//op => -6
console.log(~(-10));
//op => 9
/*
Explanation :
    1. 5 => 0000 0000 0000 0000 0000 0000 0000 0101
    2. The leftmost bit is the sign bit (0 => positive 1 => negative). When we do the negation of a number then the sign also gets reversed(ie. the bitwise not of a positive number results in a negative number).
    3. ~5 => 1111 1111 1111 1111 1111 1111 1111 1010 (binary) => This will be a very big decimal number
    (Remove the left most bit which acts as the sign bit(1))
    4. But how do we get -6 ??🤨
        🔅 The is because negative numbers gets stored in the memory in the form of 2's compliment.
        🔅 2's compliment = 1's compliment + 1
        🔅 1's compliment = (convert zeros to one and vice versa)
        🔅 So the 1's compliment of ( _111 1111 1111 1111 1111 1111 1111 1010) is (_000 0000 0000 0000 0000 0000 0000 0101)
        🔅 2's compliment of (_000 0000 0000 0000 0000 0000 0000 0101) is _000 0000 0000 0000 0000 0000 0000 0110
        🔅 _000 0000 0000 0000 0000 0000 0000 0110 in decimal form is 6
        🔅 Thus the final result is -6
*/

//* Zero fill left shift
let no4 = 8
console.log(no4 << 1);
//op => 16
console.log(no4.toString(2)) //op => 0000 1000
/*
Here the right operand specifies the number of zero bits to be added to the right.
The excess bits from the left are discarded
Explanation : 
    One zero gets added to the left
    0001 0000 => 16
*/

//* Signed right shift

//? Eg1
let no5 = Math.pow(2, 31) -1
console.log(no5);
//op => 2147483647
console.log(no5.toString(2))
//op => 0111 1111 1111 1111 1111 1111 1111 1111
let no6 = no5 >> 2
console.log(no6);
//op => 536870911
console.log(no6.toString(2))
//op => 0001 1111 1111 1111 1111 1111 1111 1111

//? Eg2
let no7 = Math.pow(-2, 31) 
console.log(no7);
//op => -2147483648
console.log(no7.toString(2))
//op => -1000 0000 0000 0000 0000 0000 0000 0000
let no8 = no >> 2
console.log(no8);
//op => -536870912
console.log(no8.toString(2))
//op => -0010 0000 0000 0000 0000 0000 0000 0000

/*
? Here the result always has the same sign as the input thus the name => Signed right shift
Here the right operand specifies the number of zero bits to be added to the left.
The excess bits from the left are discarded
Explanation : 
    One zero gets added to the right
    0000 0100 => 4
*/

//* Zero fill right shift
// Same as the signed right shift but the result need not have the same sign as the input.

//? Eg1
let no9 = Math.pow(2, 31) -1
console.log(no9);
//op => 2147483647
console.log(no9.toString(2))
//op => 0111 1111 1111 1111 1111 1111 1111 1111
let no10 = no9 >>> 2
console.log(no10);
//op => 536870911
console.log(no10.toString(2))
//op => 0001 1111 1111 1111 1111 1111 1111 1111

//? Eg2
let no = Math.pow(-2, 31) 
console.log(no);
//op => -2147483648
console.log(no.toString(2))
//op => -1000 0000 0000 0000 0000 0000 0000 0000
let no11 = no >>> 2
console.log(no11);
//op => 536870912
console.log(no11.toString(2))
//op => 0010 0000 0000 0000 0000 0000 0000 0000




