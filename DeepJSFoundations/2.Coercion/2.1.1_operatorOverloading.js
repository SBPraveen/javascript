//! NOTE : JS does't support Operator overloading
/*
So what is operator overloading??
     It is possible to change the way operators work for user-defined types like objects and structures. This is known as operator overloading. 
     Eg:
        Suppose we have created two objects c1 and c2 from a class named Complex that represents complex numbers.
        Since operator overloading allows us to change how operators work, we can redefine how the + operator works and use it to add the complex numbers of c1 and c2
*/

//* Eg:1
let msg1 = "Code "
let msg2 = 121
let msg3 = " is my secrete project"
console.log(msg1 + msg2 + msg3)
// op => Code 121 is my secrete project
/*
The operator "+" generally does numerical operations but here since one of the variable is a string it coerces all the other variables to string and concatenates all the variables.
Here the + operator is not overloaded.
Spec for the + operator:
    || The + operator either performs string concatenation or   numeric addition
The + operator's dual functionality comes with the spec itself and that users cannot change the way it behaves(ie we cannot do something like "when the type of the operand is an object concatenate its properties and methods"). Thus JS doesnt support Operator overloading
*/
//* Eg:2
let asd = 12
console.log(typeof (asd+""))
// op=> string