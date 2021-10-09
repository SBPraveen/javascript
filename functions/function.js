/**
Function => similar to a procedure—a set of statements that performs a specific task
*/ 


//*  1) Function Statement (aka) Function Declaration
function a(){
    console.log("a called")
}
//This way of creating a funtion is known as a function statement 


//* 2) Function Expressions:
var b =  function(){
    console.log("b called")
}
//Functions in JS can be assigned as a value to a variable. This is known as a function expression.


//* 3) Difference between Function Statement and Function Expression
a1();
// b1();
function a1(){
    console.log('a1 called')
}
var b1 =  function(){
    console.log("b1 called")
}
/** 
 When i try to call b1 before defining it gives an error but a1 works perfectly fine. 
This is because of hoisting
 Here during the memory creation phase a1 is assigned with the function whereas b1 is assigned with undefined until it reaches the 
 point where it is defined
 */


//* 4) Named Function Expressions
var b2 =  function xyz(){
    console.log("b-xyz called"+ xyz)
}
b2();
xyz();//This won't work
/**
This is similar to a function expression but instead of using anonymous function we use a named function.
When i try to call xyz i get a ReferenceError: xyz is not defined
this is because xyz is not created in the global scope. It can be accesed only inside the function
*/


//* 5) Difference between parameters and argumenets
var b5 =  function(param1, param2){
    console.log(param1 + param2);
}
b5(1,2)
/*
param1, param2 => parameters -> parameters are  local variables inside a function
1,2 => arguments -> arguments are values that are passed in a function call
*/


//* 6) First Class Functions (aka) First Class Citizen
/**
 Functions can be stored as values in a variable, passed as an argument, returned from a function etc. 
 Thus they are known as First Class Functions
 */


 //eg6.1
 var b6 =  function(param3){
    console.log(param3(1,2));
}
b6(function sum(x,y){
    return x + y;
})


//eg6.2
//! Important example
function magic(){
    return function sum(x,y) {
        return(x+y)
    } 
}
ans = magic();
console.log(ans(1,2))//magic() can also be called as below
// console.log(magic()(1,2));


//eg6.3
const sayBoo = function() {
    console.log('Boo!')
    return function Argh() {
      console.log('Argh!')
      return('dooood')
    }
}
console.log(sayBoo()());


//* 7) Pass by value and Pass by reference
/**
 In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value thus th changes are reflected outside the function.

 */





























