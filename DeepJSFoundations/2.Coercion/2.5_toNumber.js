let a = new Number(false)
console.log(a);
//op => 0
let a = new Number(true)
console.log(a);
//op => 1
let a = new Number(null)
console.log(a);
//op => 0
let a = new Number(undefined)
console.log(a);
//!op => NaN
let a = new Number("")
console.log(a);
//op => 0
let a = new Number("-0")
console.log(a);
//op => -0
let a = new Number("   00009")
console.log(a);//removes leading white spaces and zeros
//op => 9
let a = new Number(".!!")
console.log(a);
//op => NaN
let a = new Number("asdf")
console.log(a);
//op => NaN
let a = new Number("0xaf")// hexadecimal string
console.log(a);
//op => 175
let a = new Number(0xaf)// hexadecimal number
console.log(a);
//op => 175
//* Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase "X"

/*
||Number(Object)
When we use toNumber on a non-primitive then the toPrimitive is called first with the hint as Number (we get a primitive) which is then converted into a number.
So first valueof is called and then the toString is called.
For any array or object the valueof will return "this" which has an effect of ignoring the valueof and looking into the toString.
    for([] or {} by default){
        valueof(){
            return this
        }
    }
Thus when we use toNumber on a non-primitive(such as an object) it will call the toPrimitive and eventhough the hint to the toPrimitive is number toString will get executed
    ? Numerification of object = Stringification of object
*/

let a = []
//Numerification of objects
// S1 => toPrimitive is called (which eventually calls toString)
console.log(a.toString());//op => ""
// S2 => the output of toPrimitive is converted into a number
console.log(Number("")); //op => 0
// Result
console.log(Number(a)); //op => 0

//* Examples -  Arrays

let a = [""]
console.log(Number(a));
// op => 0
let a = ["0"]
console.log(Number(a));
// op => 0
let a = ["-0"]
console.log(Number(a));
// op => -0
let a = [undefined]
console.log(Number(a));
// op => 0
let a = [null]
console.log(Number(a));
// op => 0
let a = [1,2,3,4]
console.log(Number(a));
// op => NaN
let a = [[[]]]
console.log(Number(a));
// op => 0


//* Examples - Objects
let a = {"A":1}
console.log(Number(a));
// op => NaN
//*?Explanation :
/*
String(a) gives => [object Object]
and Number([object Object]) => NaN


*/ 
