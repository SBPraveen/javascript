/*
||toBoolean
    This is less algorithmic and more of look-up
    Anything that is not there in the falsy list evaluates to "true"
    Falsy List:
        * "" (empty string)
        * 0, -0
        * null
        * NaN
        * undefined
        * false
    Even an empty array is truthy
*/

//! Corner case :
let a = new Boolean(false)
if(a){
    console.log("Executed");
}

// op => Executed
//? Explanation :
/*
Here "a" is a falsy object => Thus its type is an "OBJECT" and the condition evaluates to true  
 */
console.log(typeof a, a);
// op => object [Boolean: false] 