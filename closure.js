/**
 Closure => Closure is when a function remembers the variables outside of it, even if you pass that function elsewhere
 A closure is the combination of a function bundled together  with the reference of  its surrounding lexical scope.
 */
//! open sources in chrome developers tool and place a debugger in the marked points to see the closures
//Example:1
function z(){
    let we = 10;
}
var c1 = 9;
function x(){
    var a1 = 12; //! instead of var a1 if you have a1 = 12 then it will not appear in the closures
    var b1 = 13; 
    function y(){
        console.log(a1, c1)
    }
    y();
}
x();
/**
 when the function y to runs it trys to find the variable a1 in its local memory scope. Unable to find,
 it goes to its lexical parent to find the variable a
 */

 //Example 2
 
function x(){
    var a1 = 12;
    function y(){
        console.log(a1)
    }
    return y;
}
z = x()
console.log(z());
/**
 Once the function x was executed the function execution contex of x goes out callstack .
 so z which holds the function y tries to log a1 we should get undefined right?
 nooooo..... This is because not only the function y was returned but a closure enclosed function along with the lexical scope was returned.
 */


 //Example 3

 function x(){
    var a1 = 12;
    function y(){
        console.log(a1)
    }
    a1 = 100;
    return y;
}
z = x()
console.log(z());
/**
 Instead of 12 we are gettng 100 because the reference to a1 was shared and not a1 
 */


  //Example 4

  function x(){
      var a = 9000
    function y(){
       var b = 12;
        function z(){
            console.log(a, b)
        }
        z();
    }
    y();
  }
  x();