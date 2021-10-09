/*
!Strings are immutable in javascript => So try converting the strings into array
*/

//Reverse a string and convert to a number
no1 = "2471";
no1 = parseInt(no1.split("").reverse().join(""));
console.log(no1)

