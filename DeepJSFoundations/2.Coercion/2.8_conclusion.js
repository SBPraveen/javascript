/*
Thus the root of all coercion is an empty string and string full of white space when coerced to a number becomes 0
*/

let a = "", s="\n\t"
console.log(Number(a), Number(s));
// op => 0 0

//|| Corner case : 
console.log(1<2);
// op=> true
console.log(2<3);
// op=> true
console.log(1<2<3);
// op=> true
/*
? Explanation:
    While 1<2<3 evaluating to true seems fascinating at first what goes behind the scenes is 
    (1<2) < 3
    true < 3
    true gets coerced to 1
    1<3
    true <= output🤨
*/
console.log(3>2>1);
// op => false
/*
*Explanation
(3<2)<1
true < 1
1<1
false❗

*/


//|| Conclusion: 
/*
So instead of completing avoiding coercion we have to develop a coding style in which all the value types are plain and obvious
Eg :  Clearly mentioning that the function "funcA" takes only strings and numbers as input and boolean as output. 
*/