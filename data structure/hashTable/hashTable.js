/*
? Hash Tables
hash Tables are like books with index => Meaning we can reach out to values faster
Counting the no of occurances, Delete duplicates, Finding unique values => use hash tables
insert and remove at constant time this is done using the hashing function
These are unordered collection of data.
They are used for quick lookups
Can be implemented using maps, set, object.
Flexible keys => Strings, functions etc
Here keys are converted into memory address using the hashing function
Hash tables cannot be sorted

Here we use arrays for storage(We can also use Linked List but it is complex)
We don't use objects because we shouldn't implement an object(hashTables boils down to objects) with a object 
if two input values are hashed and are having the same index use sub-arrays => [ [], [['one':1],['two':2]] ,[],[],[] ] 
                                                                    index =>      0     1[1]      2[2]       2  3  4
Note:
take into account,
1) the problem of resizing => When half of the array gets filled double the size of the array 
2) the problem of collisions => Can be handled using subarrays
sub-arrays => [ [], [['one':1],['two':2]] ,[],[],[] ] 
  index =>      0     1[1]      1[2]       2  3  4
*/

// Todo => Implement resizing the hash table


class HashTable{


    constructor(val){
        this._storage = [];
        this._tableSize = val;
        this._inputSize = 0; //For resizing
    }


    insert(key, value){
        const index = this._hash(key, this._tableSize);
        //arrayAtIndex chooses "[["ball",2], ["labl",3]]" in the storage array => [["app",1],0,0,0,[["ball",2], ["labl",3]],0,0,0]
        const arrayAtIndex = this._storage[index];
        //To prevent keys with the same name loop throught the array before inserting into the storage 
             //Eg: myHashTable.insert('monkey',6); myHashTable.insert('monkey',9)
        if(arrayAtIndex)
            for(let i =0; i< arrayAtIndex.length; i++)
                if(arrayAtIndex[i][0] === key)
                    return "HashTable already contains that key";    
        if(!this._storage[index]){
            this._storage[index] = [];
        }
        this._storage[index].push([key,value]);
        this._inputSize += 1;
    }


    retrieve(key){
        const index = this._hash(key, this._tableSize);
        const arrayAtIndex = this._storage[index];   
        if (arrayAtIndex) {
            for(let i=0; i<=arrayAtIndex.length; i++){
                if(arrayAtIndex[i][0] === key) return arrayAtIndex[i][1]
                // else return "There is no value associated with this key";
                //!don't  write the above statement because when the first time the loop runs if the key doesn't match then the control 
                                //will be returned and no subsequent arrays will be executed
            }                                    
        } else {
            return "There is no value associated with this key";
        }   
    }


    remove(key){
        const index = this._hash(key, this._tableSize);
        const arrayAtIndex = this._storage[index];   
        if (arrayAtIndex) {
            for(let i=0; i<=arrayAtIndex.length; i++){
                if(arrayAtIndex[i][0] === key){
                    delete arrayAtIndex[i];
                    this._inputSize -= 1;
                    return 1;                     //! return 1 else the loop will continue running and we will get Uncaught TypeError
                } 
            }
    }
}


    _hash(str, n) {
        let sum = 0;
        for(let i=0; i<str.length; i++){
            sum += str.charCodeAt(i)*3
        }
        return sum%n;
    }


}

const myHashTable = new HashTable(25);


myHashTable.insert('bat',"bat1");
myHashTable.insert('abt',"bat2");
myHashTable.insert('tab',"bat3");
myHashTable.insert('monkey',"monkey1");
myHashTable.insert('cat',"cat1");
myHashTable.insert('tiger',"Tiger1");
myHashTable.insert('monkey',"monkey2");
myHashTable.insert('monkey',"monkey3");
myHashTable.insert('cat',"cat2");
myHashTable.insert('cat',"cat3");

console.log(myHashTable);

console.log(myHashTable.retrieve("abt"))

myHashTable.remove('tiger');

console.log(myHashTable);






//! Important Questions

//*Q1 Count the number of occurences of all the characters or words in a body of a text or a string 
    // https://replit.com/@bgando/ht-unique-string-prompt
    // https://www.geeksforgeeks.org/determine-string-unique-characters/
//*Q2 Delete duplicates in a list 
    // https://replit.com/@bgando/ht-remove-dups-prompt
    // https://www.geeksforgeeks.org/remove-duplicates-from-a-given-string/
//*Q3  Find the unique value in the list 
    // https://replit.com/@bgando/ht-find-unique-list-prompt
    // https://www.geeksforgeeks.org/non-repeating-element/
//*Q4 Two number sum 
    // https://replit.com/@bgando/ht-two-items-sum
    // https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/