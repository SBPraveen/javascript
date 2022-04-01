/*
//* undefined
    The variable has been declared but at that moment it has no value stored in it
//* undeclared
    The variable has not been created at all in the accessible scope
    Undeclared value raises a Reference Error
//* uninitialized
    This is also known as the Temporal Dead Zone. Trying to access a variable which is uninitialized will give Reference Error
*/

var a 
console.log(a);//undefined
console.log(b);
//ReferenceError: b is not defined
console.log(typeof b) // undefined🤔
/*
*Bug Alert
The typeof operator returns undefined even for undeclared variables
!NOTE:
typeof(undeclared_variables) => doesnt throw an error. This is a safeguard feature.  
Use of this safeguard feature :
?Eg:1 
If the variable name is undeclared or undefined, we want to declare it and assign a value
*/
if(!name){
    let name = "JavaScript"
    console.log("My name is", name);
}
//op => ReferenceError: name is not defined
//
if(typeof name === "undefined"){
    let name = "JavaScript"
    console.log("My name is", name);
}
//op => My name is JavaScript

//|| TDZ
/*
let variables cannot be read/written until they have been fully initialized, which happens when they are declared (if no initial value is specified on declaration, the variable is initialized with a value of undefined). Accessing the variable before the initialization results in a ReferenceError
*/
{ // TDZ starts at beginning of scope
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2; // End of TDZ (for foo)
  }

  console.log(5 - NaN)