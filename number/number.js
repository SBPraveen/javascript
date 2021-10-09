const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const button = document.querySelector('.button');
const ans = document.querySelector('.ans');

//eg-1
button.addEventListener('click',()=>{
    let num1 = input1.value ;//1 stored as a string => The value from a Dom Element is always a string
    let num2 = input2.value ;//2 stored as a string
    let sum = num1+num2;
    ans.innerText = sum
})
//without Number() - ans => 12


//eg-2
button.addEventListener('click',()=>{
    let num1 = Number(input1.value) ;//1
    let num2 = Number(input2.value) ;//2
    let sum = num1+num2;
    ans.innerText = sum
})
//with Number() - ans => 3



