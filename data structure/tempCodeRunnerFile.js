let myMap = new Map();
myMap.set('jessie',0);
if(myMap.has('jessie')){
    myMap.set('jessie', myMap.get('jessie')+1)
    console.log(myMap.get('jessie'))
}