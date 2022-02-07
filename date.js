//Easiest method
let a = new Date()
console.log(`${a.getDate()}\\${a.getMonth()+1}\\${a.getFullYear()} ${a.getHours()}:${a.getMinutes()}:${a.getSeconds()} `)
// op => 11\1\2022 17:29:2 

//*========================================

let today = new Date();
console.log(+today) // 1642660352369
let todayDate = today.toLocaleDateString("en-US");
console.log(todayDate); // 1/20/2022
let [month, date, year]    = todayDate.split("/")
console.log(date, month, year);// 20 1 2022


//day
console.log(today.getDay()+' Day');// Sunday - Saturday : 0 - 6
//month
console.log(today.getMonth()+' Month');//0 => January, 1 => February......
//year
console.log(today.getFullYear()+' Year');//Don't use getYear => Gives wrong results.


//hours
console.log(today.getHours()+' Hours');
//minutes
console.log(today.getMinutes() +' Minutes');
//seconds
console.log(today.getSeconds()+ ' Seconds');

// getTime() method returns the number of milliseconds since midnight of January 1, 1970.
console.log(today.getTime);
