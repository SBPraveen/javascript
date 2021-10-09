/*
Tth speed of execution of a certain algorithm can be calculated by using 
1) process.hrtime() => time will be monotonically increasing(constantly increasing), and will not be subjected to clock-drifts(undesirable).
2) performance.now() => not available in node. available in chrome, firefox etc
 */

// 1) process.htime()
let startTime = process.hrtime();

    const str1 = new String("TestingJavaScriptPrimitivesAndObjects");//String Object => new String()
    let str1Capitalized = new String();
   
    for (let i=0; i<str1.length; i++){
        str1Capitalized= str1Capitalized+str1[i].toUpperCase();
    }
    let stopTime = process.hrtime(startTime) ;
//process.hrtime(startTime) =>returns high-resolution real time in [seconds, nanoseconds] array
    let timer = stopTime[1];
    console.log(timer);

// 2) performance.now()
const before = window.performance.now();
let sum = 0;
for(let i = 0;i<1000000000; i++){
    sum+=i;
}
console.log(window.performance.now() - before);
