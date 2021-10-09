/*
Strict mode applies to entire scripts or to individual functions.
Strict mode in javascript tightens the rule for certain behaviour. They help to execute the code safer and helps js enines perform optimization. 
Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, 
    so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode.
        But nowadays all modern browsers support "use strict" except Internet Explorer 9 and lower.
Non-strict mode is known as the 'sloppy mode' => default
*/

// 1)Converts mistakes and bad practices into errors
function sloppyMode1(){
    y = 3.14;// no error => using a varible without declaring it 
    console.log(y+ " Sloppy Mode"); 
}
function strictMode1(){
    "use strict";
    x = 3.14;      // raises a reference error
    console.log(x+ " Strict Mode");
}

sloppyMode1();
strictMode1();
//INFERENCE:
//In strict mode if you used a variable without defining it, a reference error  will be raised whereas it will not be raised in sloppyMode.\


//2) Will not allow JS to assign values to getters (this happens when we forget to add setters)
"use strict";
var obj = {
    b:0,
    get x(){
        return this.b},
    // set x(valuePassed){                //? Since we have commented out setter and trying to assign a value "use strict will raise an error"
    //     this.b = valuePassed;
    // }
    };
obj.x = 10 // in sloppy mode this doesn't raise an error
console.log(obj.x)



//3)Doesn't allow parameters with the same name 
function summing(a,a,c){
    "use strict";
    return (a+a+c) // without use strict op is 7(2+2+3) but we get an error when we use "use strict"
}
console.log(summing(1,2,3));



//4) using keywords as variables

"use strict"
var undefined = 10;
console.log(undefined); //in sloppy mode output is 10(BAD) 