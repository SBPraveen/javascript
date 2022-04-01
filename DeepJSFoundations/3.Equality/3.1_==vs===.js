
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

//? Eg: 2.2
let a  = [1,2]
let a1  = [1,2]
console.log(a == a1);
//false

//? Eg: 2.3 => A bad example of coercion
let no1 = 22
let no2 = [22]
console.log(no1 == no2);
//💔 BTW this is a terrible comparison
//op => true
// no2 is coerced to a primitive(toString) which is again coerced to a number
console.log(no2.valueOf(), no2.toString());

//|| Usasge:1 of == 
let a = null
let s = undefined
console.log(a == s);
//op => true
//Assume we dont want our if block to execute if the value is only undefined or null instead of checking a===null and a===undefined, a==null does the job
if(a == null){
    console.log("The input is null or undefined");
}
else{
    console.log("The input is not null or undefined");
}
//op => The input is null or undefined
//!Note : 
console.log(0 == null);
//false
console.log(typeof null); //object
console.log(null.toString()); //""
console.log(Number("")); // 0 
console.log(0 === 0); //true

console.log(true == 32);// false
//true gets coerced to a number 1
//1=== 32 is false
//!----------------------------------------------------------------------
console.log(Number(null));
/*
 the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why null == 0 is false.
*/

//|| Usasge:2 of == 
//If we want to execute the block if the input is 9 (The ip can be a string or a number 9)

let func = (ip) => {
    if(ip == 9){
        console.log("executed");
    }
} 
func(9)
func("9")

//! Eg: 3
console.log("3.0" == "3");
//op => false
//Since both are strings(same type => so ===) it tries to do an exact match
console.log("3.0" == 3);
//op => true
// Here the string 3.0 is coerced to a number 3

