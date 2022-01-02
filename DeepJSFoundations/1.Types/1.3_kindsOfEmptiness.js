/*
//* undefined
    The variable has been declared but has not been assigned a value
//* undeclared
    The variable has not been created at all
//* uninitialized
    This is also known as the Temporal Dead Zone. Trying to access a variable which is uninitialized will give Reference Error
*/

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