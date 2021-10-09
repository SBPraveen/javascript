//IIFE => Immediately Invoked Function Expression is a JavaScript function that runs as soon as it is defined.

//Example 1 
function hello1() {
    console.log('hello1');
   }
   
   // The hello2 function is an IIFE
   //IIFE functions dont create global variables
   (function hello2() {
       console.log('hello2');
   })();
   
   function hello3(){
       console.log('hello3');
   }
   
   hello1();
   // hello2(); Produces a reference error since hello2's functional execution contex has already expired
   hello3();

//Example 2
//! Important example
let app = (function(){
    console.log('Praveen')
    return function(){
        console.log('returned function')
    };
})()
//just run the above code output is => Praveen
app();
//after calling the output is => Praveen returned function
