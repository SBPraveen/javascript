//Maps

/*reasons to use map rather than mere objects
1.Maps can have any type of value as a key: objects, functions, or primitives.
2.Determining the size of a Map is possible in O(1) time, while it takes O(n) steps for a plain object
3.entries of a Map can be retrieved in constant time, while for an object it takes O(n) time.
*/



//Methds in maps
/*
.set(key, vales)
.get(key) 
.size => we are using size instead of length because .length property works only when the index is an integer.
.keys()
.values() 
.has(key)
.delete(key)
.clear() 
*/

let myMap = new Map();
myMap.set('jessie', { address: "virugambakkam", contact: 8925881281 });
myMap.set('karthik', { address: "erew", contact: 564651281 });
myMap.set('naveen', { address: "jfjfgjf", contact: 23156281 });
myMap.set('kumar', { address: "xbxcnv", contact: 89752281 });
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has('naveen'));
console.log(myMap.get('jessie'));
myMap.delete('kumar');
console.log(myMap.size);
console.log(myMap.keys());
console.log(myMap.values());
myMap.clear();
console.log(myMap);

//-----------------------------------------------------------------------------------------------
//! Incrementing map values
let myMap = new Map();
myMap.set('jessie',0);
if(myMap.has('jessie')){
    myMap.set('jessie', myMap.get('jessie')+1)
    console.log(myMap.get('jessie'))
}

//--------------------------------------------------------------------------------------

//.entries()
//Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
//In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

let myMap1 = new Map();
myMap1.set('asdf1', { address: "qwert1", contact: 8925881281 });
myMap1.set('asdf2', { address: "qwert2", contact: 564651281 });
myMap1.set('asdf3', { address: "qwert3", contact: 23156281 });
myMap1.set('asdf4', { address: "qwert4", contact: 89752281 });
const a = myMap1.entries();
console.log(a);
console.log(a.next()); 
//.next() returns an object with two properties done and value
//done is a boolean which returns true when we have exceeded the number of items in the map  
// value returns the items
console.log(a.next().done);// done => false
console.log(a.next().value);// done => false
console.log(a.next());// done => false
console.log(a.next());// done => true

//--------------------------------------------------------------------------------------

//Iteration through a map

let myMap2 = new Map();
myMap2.set('one','1');
myMap2.set('two','2');
myMap2.set('three','3');
myMap2.set('four','4');
myMap2.set('five','5');
//for....of
for(let [key, value] of myMap2){
    console.log(key+ " = "+value);
}

for (let value of myMap2.values()){
    console.log(value);
}
for (let key of myMap2.keys()){
    console.log(key);
}
for(let [key,value] of myMap2.entries()){
    console.log(key+ " = "+value);
}
//forEach()
myMap2.forEach((key,value) => console.log(key+ " = "+value));

//----------------------------------------------------------------------------------

//cloning and merging Maps

let myMap3 = new Map();
myMap3.set('one','1');
myMap3.set('two','2');
myMap3.set('three','3');
myMap3.set('four','4');
myMap3.set('five','5');

let myMap4 = new Map();
myMap4.set('six','6');
myMap4.set('seven','7');
myMap4.set('eight','8');
myMap4.set('nine','9');
myMap4.set('ten','10');

let mergedMap = new Map([...myMap3, ...myMap4])

console.log(mergedMap);

let clone = new Map(myMap3);
console.log(clone.has('one'));
console.log(clone);
clone.delete('one');
console.log(clone); // one deleted in the clone and not in myMap3
console.log(myMap3);