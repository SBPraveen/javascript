/*
*Myth :
Double equals checks only the values while triple equals checks the values as well as the types
*Reality :
Double equals allows coercion while triple equals disallows coercion.
Instead of saying == is bad and unpredictable we have to think in an equality comparison scenarion whether we want to allow coercion or not. 
*References :
https://262.ecma-international.org/9.0/#sec-strict-equality-comparison
https://262.ecma-international.org/5.1/#sec-11.9.3 (understanding purpose read this)
*/

//?Eg 1:
let x = true
let y = "true"
console.log(x == y);
//*op
//false 
//*Explanation
/*
If == checks only the value then the output of the following code should have been true.
To understand this strange behaviour we have to read the algorithm of ==
*/

/*
|| Double Equals: 
    Double equals works based on the Abstract Equality Comparison Algorithm.
    Step 1 of the algo is as follows : (Refer 3.1.1 for full algorithm)
        If Type(x) is the same as Type(y), then
            Return the result of performing Strict Equality Comparison x === y.

|| Triple Equals : 
    Triple equals works based on the Strict Equality Comparison Algorithm.
    Step 1 of the algo is as follows : (Refer 3.1.2 for full algorithm)
        If Type(x) is different from Type(y), return false.

*Conclusion :
    Thus it is obvious that == also checks the type but what really matters is,
    So when the types match both == and === behave the same. Only when the types dont match === immediately returns false while == checks for equality after allowing coercion to be applied on the values.
*/
//?Eg 1 (cont):
let x = true
let y = "true"
//If one of the type is a boolean then convert the boolean into a number.
console.log(Number(x), y)
//op => 1 "true"
//When numbers and strings are getting compared the string gets converted into a number 
console.log(1, Number(y));
//op => 1 NaN
// Since the typeof NaN is a number and the typeof x is same as the typeof y now apply === algo
console.log(1 === NaN);
//false

//? Eg: 2
let stu1 = {
    name : "Praveen"
}
let stu2 = {
    name : "Praveen"
}
console.log(stu1 == stu2);
console.log(stu1 === stu2);
//op => false false
/*
!NOTE :
Here js doesnt check whether the structure of the two objects is same or not instead  it does identity comparison ie. it checks whether stu1 and stu2 points to the same object
*/

//? Eg: 2.1
let a1 = new String("a")
let a2 = new String("a")
console.log( a1 == a2);// ------1
console.log(a1 == "a");// ------2
//op => false true
/*
*Explanation : 
Here the condition 2 is true because if one of the values is an object then the toPrimitive is called which inturn calls the valueOf
*/
console.log(a1.valueOf(), typeof a1.valueOf(), a1.valueOf() === "a");
//op => a string true

//|| Usasge:1 of == 
let a = null
let s = undefined
console.log(a == s);
//op => true
//Assume we dont want our if block to execute if the value is undefined or null instead of checking a===null and a===undefined, a==null does the job
if(a == null){
    console.log("The input is null or undefined");
}
else{
    console.log("The input is not null or undefined");
}