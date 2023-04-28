/*
||Debouncing and Throttling
Both debouncing and throttling are used for performance optimization by reducing the rate of execution of a function call(Mostly this function makes an API call or does some logging)
*Debouncing
If the time difference between two events is more than the delay then make an API call.
Debouncing can be used in search bar suggestions
*Throttling
In throttling an API call is made if the time difference between two function calls is greater than the delay.
In throttling the second API call is made if the time elapsed after the first API call exceeds the delay
Throttling can be used in shooting games ie. 
            Machine gun(300ms) => Irrespective of how many times the user clicks the shoot button the bullet gets fired only after 300ms
            Piston(900ms) => Irrespective of how many times the user clicks the shoot button the bullet gets fired only after 900ms
*/