# Prototypal Inheritance
One object trying to accesss the methods and properties of another object.  
Eg: We are able to access predefined methods in arrays, functions,...because all the inbuilt methods and properties are stored inside the prototype.  
Note:  
In arrays prototypesdoes not contain properties such as length
```js
let arr = [11,22,33]
console.log(arr.push(44))
console.log(arr.__proto__)
// op => [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
```

JS initially checks if the property is there in the element. Eg arr[0] would be accessible but arr.length could not be located. So it goes inside the prototype and checks if there is any length property.

