/*
== checks only the value => Allows coercion
=== checks the value as well as the type => Disallows coercion
if both the values are obviously of the same type use == else go with ===
*/

//consider a case where the variable 'a' could be null or undefined => you don't know
let a = null; //undefined

// Since === checks for type values as well as the types we have to check whether 'a' is null or 'a' is undefines 
if(a === null || a === undefined ){
    console.log('===');
}

//here undefined is coerced as null
if(a == undefined){
    console.log('==')
}



let name1 = {
    firstName:"Praveen",
    lastName:"SB",
}
let logger = function(age, gender){
        console.log(this.firstName + " " + this.lastName + ". My age is "+ age+ ". My gender is "+ gender)
    }
let boundMethod = logger.myBind(name1, 21, "male")
console.log(boundMethod)
boundMethod()