//||Easiest and preferred way
let today1 = new Date()
console.log(`${today1.getDate()}\\${today1.getMonth()+1}\\${today1.getFullYear()} ${today1.getHours()}:${today1.getMinutes()}:${today1.getSeconds()} `)
// op => 11\1\2022 17:29:2 

//|| Using Date as a function
let today2 = Date()
console.log(today2);
//op => Thu Mar 24 2022 06:29:03 GMT+0530 (India Standard Time)
console.log(today2.getDate());
//op => TypeError: today2.getDate is not a function

/**
 * *Inference
    * Note Date can also be used a function. But it is preferred to use Date along with the new keyword since new Date() returns an object and we will have a ton of inbuilt methods(getDate, getMonth, ...) to create the format of the date we want.
    * Whereas when date is used as a function it returns a value and thus to construct the date in our format we have to do a lot of string manipulation since we cannot access the methods on the value.
 */

//||Detailed
let today = new Date();
console.log(today);
//op => 2022-03-24T00:37:21.723Z
console.log(+today) //coerced to a number
//op => 1642660352369
console.log(today.getTime());
//op => 1642660352369
/**
 * *Inference
    *1642660352369 represents the the number of milliseconds since midnight of January 1, 1970.
 */

let todayDate = today.toLocaleDateString("en-US");
console.log(todayDate); // 1/20/2022
let [month, date1, year]    = todayDate.split("/")
console.log(date1, month, year);// 20 1 2022


const date = () => {}
export default date
