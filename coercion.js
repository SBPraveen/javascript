/*
Coercion => The process of converting value from one type to another Eg => string to number.
coercion is valid for both primitie as well as objects
*/


//Eg:1
let msg1 = "Ther are ";
let noOfStudents = 16;
let msg2 = " students in the class"
console.log(msg1 + noOfStudents + msg2);//the Number 16 is converted into a String

//Easiest way to convert a numer to a string
noOfStudents = 16 + "";
console.log(typeof noOfStudents);

/*
number + number = number
string + number = string
number + string = string
string + string = string
*/


//Eg:2
 let a = 16;
 let b = 18 + "";
 if(b>a){     //eventhough b is a string  it is implicitly converted to a number
     console.log('b graeter than a')
 }

 //Eg3
 console.log(1 + 2 + "apples" + [1,2,3])