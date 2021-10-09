/*
NaN=> Not a Number doesnt necessiarly means the value is not a number.
NaN is returned when we try to do mathematical operations on a string and in case where we 
try to do mathematical operations in datatypes that are not supported.
*/
let nameIs = "Praveen";
let nameDivide = nameIs / 2;
console.log(nameDivide);//NaN
console.log(typeof NaN);//number
console.log(Number.isNaN(nameDivide));//true
console.log(Number.isNaN(nameIs));//false