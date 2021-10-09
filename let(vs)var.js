//Eg:1
//Since var doesn't have a block scope we get the output as 20 even in the global scope(line 7)
var a = 10;
{
    var a = 20;
    console.log(a);//output => 20
}
console.log(a);//output => 20

//Eg:2
//Since let has a block scope we get the output as 10  in the global scope(line 17)
var a = 10;
{
    let a = 20;
    console.log(a);//output => 20
}
console.log(a);//output => 10

// Eg:3
function summing(no){
    var result = 0;
    for(let i =1 ; i<=no; i++){
        result = result + i;
    }
    return result;
}
console.log(summing(10));
/**
 Inference : use 'var' when we have to access in the global scope and use 'let' only when we have to access it only inside a particular block 
 */

 // Eg:4
 var name = "praveen";
 function college(){
     var name = "asdf"
     console.log(name);
 }
 college();
 for(var name = 0; name<10; name++){
     console.log(name)
 }

console.log(name); //! instead of praveen, 10(from the for loop) gets printed
/**
This happens because var doesn't have a block scope
Also "let" doesn't allow multiple declaration  =>var name = "praveen"; var name = "asdf"; var name = 0
*/ 