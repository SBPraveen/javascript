const boxing = () => {
/*
||Boxing: 
    Accessing properties on primitive values is known as boxing.
    Its a form of implicit coercion where the primitive value is converted into an object
    The implicit coercion that takes place is way more faster than doing it explicitly ie. by doing 
    let b = new String(a)
    console.log(b.length) 
*/
//Eg:
let a = "javascript"
console.log(a.length)
// 10

//||Unboxing:
/*
Unboxing is the process of removing the object wrappers.Unboxing can be done by using the valueOf method(explicit method) and by adding it to an empty string(implicit method)
*/
let boxedVar = new String("Im boxed")
console.log("boxed =>",boxedVar);
console.log("unboxed =>",boxedVar.valueOf());
/*
op =>
boxed => [String: 'Im boxed']
unboxed => Im boxed
*/
let boxedVar1 = new String("Im boxed")
console.log("boxed =>",boxedVar1);
console.log("unboxed =>",boxedVar1+"");
/*
op =>
boxed => [String: 'Im boxed']
unboxed => Im boxed
*Inference:
    Here boxedVar1 is coerced to a string and thus the unboxing is done implicitly.
*/
}
export default boxing

let boxedVar = new String("Im boxed")
console.log("boxed =>",boxedVar);
console.log("unboxed =>",boxedVar.valueOf());
console.log("unboxed =>",boxedVar+"");