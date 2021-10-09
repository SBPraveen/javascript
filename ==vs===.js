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