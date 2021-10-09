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
        }
    }
}

factoryFunc.multiplier = 200;
console.log(factoryFunc.multiplier);
const six = factoryFunc(6);//'new' keyword is not used 
six.multiplier = 200;
console.log(six)
console.log(six.product());


// factoryFunc.multiplier = 200;
// const seven = factoryFunc(7);
// seven.multiplier = 300;
// console.log(seven)
// console.log(seven.product());


//Dont use factory functions when you are planning to use prototypes because it will be difficult to implement prototypes using factory functions