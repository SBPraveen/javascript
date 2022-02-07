/*
!Strings are immutable in javascript => So try converting the strings into array
*/

//|| Reverse a string and convert to a number
no1 = "2471";
no1 = parseInt(no1.split("").reverse().join(""));
console.log(no1)

//|| trim
//trim removes the leading and the trailing white spaces
let a = "   Im working in   unifo    chennai    " 
console.log(a.trim() +"India");
//op => Im working in   unifo    chennaiIndia