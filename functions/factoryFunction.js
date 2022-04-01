//!use chrome developer tools
/*
Factory function => A factory function is a function that returns an object without the keyword new.
                 => It also enhances data privacy
*/

function factoryFunc(no){
    let multiplier = 100;
    return{
        product(){
            return no*multiplier;
        },
        randomvar : 12200
    }
}


const six = factoryFunc(6);//'new' keyword is not used 
six.multiplier = 200;
console.log(six)
console.log(six.product());
/*
op => 
{ product: [Function: product], randomvar: 12200, multiplier: 200 }
600
*/


//Dont use factory functions when you are planning to use prototypes because it will be difficult to implement prototypes using factory functions