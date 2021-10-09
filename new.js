/*
new => The new keyword is used in javascript to create a object (both user defined as well as built-in) 
from a constructor function.
new keyword is used to instantiate instances of objects
All the built in objects are in Capitalized to mimic java.
use 'new' keyword for => Object(), Aray(), Function(), Date(), RegExp(), Error() etc.
don't use 'new' keyword for => String(), Number(), Boolean() because we want to use them as functions. Why to use these as functions??
            => String primitives has better and a faster performance than string objects. => refer Example2 
=> Inshort use new when we want to make an object representation and skip the new keyword whenever we want to do type conversions
*/ 

let totalTime1 = 0;
//running the code 1000000 times to get the average speed of execution
for (let i =0; i<1000000; i++){
    let startTime = process.hrtime();

    const str1 = "TestingJavaScriptPrimitivesAndObjects";//String Primitive => ("")
    let str1Capitalized = '';
   
    for (let i=0; i<str1.length; i++){
        str1Capitalized= str1Capitalized+str1[i].toUpperCase();
    }
    let stopTime = process.hrtime(startTime) ;
//process.hrtime(startTime) =>returns high-resolution real time in [seconds, nanoseconds] array
    let timer = stopTime[1];
    totalTime1 += timer;
}

console.log(totalTime1/1000000 + `nanoseconds primitive("")` );
//-------------------------------------------------------------------------------------------
let totalTime2 = 0;
//running the code 1000000 times to get the average speed of execution
for (let i =0; i<1000000; i++){
    let startTime = process.hrtime();

   
    const str1 = String("TestingJavaScriptPrimitivesAndObjects");//String Primitives => String()
    let str1Capitalized = String();
   
    for (let i=0; i<str1.length; i++){
        str1Capitalized= str1Capitalized+str1[i].toUpperCase();
    }
    let stopTime = process.hrtime(startTime) ;
//process.hrtime(startTime) =>returns high-resolution real time in [seconds, nanoseconds] array
    let timer = stopTime[1];
    totalTime2 += timer;
}

console.log(totalTime2/1000000 + `nanoseconds primitive(String())`);
//------------------------------------------------------------------------------------------
let totalTime3 = 0;
//running the code 1000000 times to get the average speed of execution
for (let i =0; i<1000000; i++){
    let startTime = process.hrtime();

    const str1 = new String("TestingJavaScriptPrimitivesAndObjects");//String Object => new String()
    let str1Capitalized = new String();
   
    for (let i=0; i<str1.length; i++){
        str1Capitalized= str1Capitalized+str1[i].toUpperCase();
    }
    let stopTime = process.hrtime(startTime) ;
//process.hrtime(startTime) =>returns high-resolution real time in [seconds, nanoseconds] array
    let timer = stopTime[1];
    totalTime3 += timer;
}

console.log(totalTime3/1000000 + `nanoseconds Object("new String()")` );