let today = new Date();
let todayDate = today.toLocaleDateString("en-US");
console.log(todayDate);
let [month, date, year]    = todayDate.split("/")
console.log(date, month, year);


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
