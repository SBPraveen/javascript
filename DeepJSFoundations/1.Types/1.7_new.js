import date from "../../date"
import errorHandling from "../../errorHandling"
import regex from "../../regex"
import constructorFunction from "../../functions/constructorFunction"

/** 
 * *The new keyword can be used for(Highly recmended): 
    Date()

** If needed the new keyword can be used for =>
    Error() 
    Regex() 
    Array()
    Object()
    Function()
** Don't strictly use the new keyword for =>
    String()
    Number()
    Boolean()

All the methods mentioned above are some of the most commonly used  natives.
They are called as natives since these are provided by JS itself. 
These natives can be used as a constructor functions(ie. when used with the new keyword) to produce objects or used as a normal function to produce primitives. 
*{@link constructorFunction}
*!As a general rule, the constructor forms should generally be avoided unless we really know we have to use them .
Thus it is preferable to use the natives in the literal form ie.without the new keyword 

*/

/**
 *?Why it is recomended to use new keyword for date ??
    Refer to the docs below
        * date => {@link date}
        * regex => {@link regex}

 *?Why it is not recomended to use new keyword ??
        * error => {@link errorHandling}
        * boolean => given below
 */

//?Boolean
let str = new Boolean(false)
if(!str){
    console.log("inside if");
    console.log(str,typeof str);
}
else{
    console.log("inside else");
    console.log(str,typeof str);
}
/*
op => 
inside else
[Boolean: false] object
*/

/*
The op should have been => inside if 
But instead we got inside else because str is an object and objects are truthy values
This is probably one of the reasons why we shouldn't use "new" keyword for strings, numbers and booleans
*/
let strNo = "10"
let num = Number(strNo)
console.log(num);

const newKeyword = () => { return 1}
export default newKeyword

