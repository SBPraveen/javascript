/*
https://regexr.com/ => regex tester
https://www.youtube.com/watch?v=B5iF6XBpcsI&t=312s => course

||Regular Expression
A regex is a sequence of chracters that is used to construct a search pattern
Syntax:

* var condition = new RegExp(pattern, attributes)

or

* var condition = /pattern/attributes

pattern => String that expresses the pattern that  the regex has to look for
attributes => Optional string that specifies the attributes such as case insensitive, global, multi line matches 

!A Regex expression is never equal to another regex expression eventhough both holds the same value
*/
let pattern1 = /in/g;
let pattern2 = /in/g;
console.log(pattern1 == pattern2, pattern1 === pattern2);

//||RegExp as a normal function vs as a constructor function vs as a regex literal
/**
  https://stackoverflow.com/questions/1928342/javascript-using-constructor-without-operator-new
 */
  let str = "Sun is rises in the East"
  let patternLiteral = /Sun/i;
  let patternConstructor = new RegExp("Sun", 'i');
  let patternFunction = RegExp("Sun", 'i');
  console.log(patternLiteral, typeof patternLiteral);
  console.log(patternConstructor, typeof patternConstructor);
  console.log(patternFunction, typeof patternFunction);
  console.log(patternLiteral === patternConstructor, patternConstructor ===patternFunction);
/*
*op=>
  /Sun/i object
  /Sun/i object
  /Sun/i object
* Interference:
    The function call RegExp(…) is equivalent to the object creation expression new RegExp(…) with the same arguments.
    https://262.ecma-international.org/12.0/#sec-regexp-constructor
*/

/*
? Modifiers
    1. g => It performs global match => returns all the instances
    2. i => It performs case insensitive matching => returns only the first instance
    3. m => It performs multi line matching. => returns only the first instance
*/

//* g

// let str = "I studied at SSN which is in Chennai. Inside the cafe. innings In"
// let pattern = /in/g;
// let result = str.match(pattern)
// console.log(result)

// op => ['in', 'in', 'in']


//* i

// let str = "I studied at SSN which is in Chennai. Inside the cafe. innings In"
// let pattern = /ssn/i;
// let result = str.match(pattern)
// console.log(result)

// op => ['SSN', index: 13, input: 'I studied at SSN which is in Chennai. Inside the cafe. innings In', groups: undefined]


//* m

// let str = "I studied at SSN which is in Chennai. \n Inside the cafe. \n innings In"
// let pattern = /innings/m;
// let result = str.match(pattern)
// console.log(str)
// console.log(result)

//op
// I studied at SSN which is in Chennai. 
//  Inside the cafe. 
//  innings In
// ["innings"]
  

/*
||Brackets
    ? [abc], [0-9]
        Finds the characters/digits that are present within the brackets

    ? [^abc], [^0-9]
        Finds the characters/digits that are not present within the brackets
*/

//* Prints the first instance of a or A 
// let str = "I studied at SSN which is in Chennai"
// let pattern = /[A]/i;
// let result = str.match(pattern)
// console.log(result)
//op
// [
//     'a',
//     index: 10,
//     input: 'I studied at SSN which is in Chennai',
//     groups: undefined
//   ]
  

//* Prints all the characters that is not character "a" 
// let str = "I studied at SSN which is in Chennai"
// let pattern = /[^a]/g;
// let result = str.match(pattern)
// console.log(result)
//op
// [
//     'I', ' ', 's', 't', 'u', 'd', 'i',
//     'e', 'd', ' ', 't', ' ', 'S', 'S',
//     'N', ' ', 'w', 'h', 'i', 'c', 'h',
//     ' ', 'i', 's', ' ', 'i', 'n', ' ',
//     'C', 'h', 'e', 'n', 'n', 'i'
//   ]
  

//* Prints the first character that is not a or A
// let str = "I studied at SSN which is in Chennai"
// let pattern = /[^A]/i; 
// let result = str.match(pattern)
// console.log(result)
//op
// [
//     'I',
//     index: 0,
//     input: 'I studied at SSN which is in Chennai',
//     groups: undefined
//   ]
  

//* Prints all the nos that are not between 2 to 6
// let str = "0123456789"
// let pattern = /[^2-6]/g;
// let result = str.match(pattern)
// console.log(result)
// op
// [ '0', '1', '7', '8', '9' ]


/*
|| Metacharacters
    w => Finds a word character ie. omits all the special characters, spaces
    W => Finds a non-word character
    d => Finds a digit
    D => Finds a non digit character
    s => Finds a whitespace character
    S => Finds a non whitespace character
    b => Finds a match at the beginning/end of a word
    B => Finds a match but not at the beginning/end of a word
    n => Finds the newLine character
    f => Finds a form feed character
            (Form feed means advance downward to the next "page". Form feed is a page-breaking ASCII control character.)
    r => Finds a carriage return character
            (Carriage return means to return to the beginning of the current line without advancing downward.)
            console.log(`praveen \rsb`)
            sbaveen
*/


//* w
// let str = "Hiii ! ! ! Do you know me ? ?  "
// let pattern = /\w/g;
// let result = str.match(pattern)
// console.log(result)
//op
// [
//     'H', 'i', 'i', 'i',
//     'D', 'o', 'y', 'o',
//     'u', 'k', 'n', 'o',
//     'w', 'm', 'e'
//   ]
  

//* W
// let str = "Hiii ! ! ! Do you know me ? ?  "
// let pattern = /\W/g;
// let result = str.match(pattern)
// console.log(result)
//op
// [
//     ' ', '!', ' ', '!',
//     ' ', '!', ' ', ' ',
//     ' ', ' ', ' ', '?',
//     ' ', '?', ' ', ' '
//   ]
  
//* d
//let str = "Give your 100% every tucking day. how to spell 20  "
// let pattern = /\d/g;
// let result = str.match(pattern)
// console.log(result)
//op
// [ '1', '0', '0', '2', '0' ]


//* D
// let str = "Give your 100% every tucking day. how to spell 20  "
// let pattern = /\D/g;
// let result = str.match(pattern)
// console.log(result)
//op
//  [
//   'G', 'i', 'v', 'e', ' ', 'y', 'o', 'u',
//   'r', ' ', '%', ' ', 'e', 'v', 'e', 'r',
//   'y', ' ', 't', 'u', 'c', 'k', 'i', 'n',
//   'g', ' ', 'd', 'a', 'y', '.', ' ', 'h',
//   'o', 'w', ' ', 't', 'o', ' ', 's', 'p',
//   'e', 'l', 'l', ' ', ' ', ' '
// ]



//* s
// let str = "Give your 100% every tucking day. how to spell 20  "
// let pattern = /\s/g;
// let result = str.match(pattern)
// console.log(result)
//op
// [
//     ' ', ' ', ' ', ' ',
//     ' ', ' ', ' ', ' ',
//     ' ', ' ', ' '
//   ]


//* S
// let str = "Give your 100% every tucking day. how to spell 20  "
// let pattern = /\S/g;
// let result = str.match(pattern)
// console.log(result)
//op
// [
//     'G', 'i', 'v', 'e', 'y', 'o', 'u',
//     'r', '1', '0', '0', '%', 'e', 'v',
//     'e', 'r', 'y', 't', 'u', 'c', 'k',
//     'i', 'n', 'g', 'd', 'a', 'y', '.',
//     'h', 'o', 'w', 't', 'o', 's', 'p',
//     'e', 'l', 'l', '2', '0'
//   ]
  

//* b
// let str = "HELLO, LOOK AT YOU!"
// //Search for the pattern at the beginning of a word 
// let pattern1 = /\bLO/g;
// //Search for the pattern at the end of a word 
// let pattern2 = /LO\b/g;
// let result1 = str.search(pattern1)
// let result2 = str.search(pattern2)
// console.log(result1, result2)
// op
// 7, 3
  

//* B
// let str = "HELLO, LOOK AT YOU!"
// //Find the first occurrence of "LO" where it is NOT at the beginning of a word:
// let pattern1 = /\BLO/g;
// //Find the first occurrence of "LO" where it is NOT at the END of a word:
// let pattern2 = /LO\B/g;
// let result1 = str.search(pattern1)
// let result2 = str.search(pattern2)
// console.log(result1, result2)
//op 
// 3 7


//* n
// let str = "HELLO, \n LOOK AT YOU!"
// let pattern = /\n/g;
// let result = str.search(pattern)
// console.log(result)
//op
// 7 

/*
||Quantifers
*/

//*  n+ 
//It matches any string that contains atleast one "n" . Incase the searchTerm consists of more than one character then the string should have all the characters 
    //?Eg1
// let str = "Hellooo World! Hello W3Schools!"
// let pattern = /o+/g;
// let result = str.match(pattern)
// console.log(result)
//op
// [ 'ooo', 'o', 'o', 'oo' ]
    //?Eg2
// let str = "Hellooo World! Hello W3Schools! praveen naveen jennis mano jenifer"
// let pattern = /lo+/g;
// let result = str.match(pattern)
// console.log(result)
//op
//[ 'looo', 'lo' ]

//*  n*
//It matches any string that contains 0 or more "n". Incase the searchTerm consists of more than one character then the string should have atleast one of the characters 
    //?Eg1    
// let str = "Hellooo World! Hello W3Schools!"
// let pattern = /o*/g;
// let result = str.match(pattern)
// console.log(result)
//op
//[
//     '',   '',  '', '', 'ooo', '',
//     '',   'o', '', '', '',    '',
//     '',   '',  '', '', '',    'o',
//     '',   '',  '', '', '',    '',
//     'oo', '',  '', '', ''
//   ]
    //?Eg2
// let str = "Hellooo World! Hello W3Schools! praveen naveen jennis mano jenifer"
// let pattern = /lo*/g;
// let result = str.match(pattern)
// console.log(result)
//op
//[ 'l', 'looo', 'l', 'l', 'lo', 'l' ]


//* n?
//Very similar to * the only difference is shown in the example 2
    //?Eg1    
// let str = "Hellooo World! Hello W3Schools!"
// let pattern = /o*/g;
// let result = str.match(pattern)
// console.log(result)
//op
//[
//     '',   '',  '', '', 'ooo', '',
//     '',   'o', '', '', '',    '',
//     '',   '',  '', '', '',    'o',
//     '',   '',  '', '', '',    '',
//     'oo', '',  '', '', ''
//   ]
    //! Eg2  => This eg demonstrates the diff between ? and *
    // The diff is ? allows only the exact pattern to be returned whereas * allows the duplication of characters in the pattern as long as the pattern is not broken
// let str = "Hellooo World! Hello W3Schools! praveen naveen jennis mano jenifer"
// let pattern = /lo?/g;
// let result = str.match(pattern)
// console.log(result)
//op
// [ 'l', 'lo', 'l', 'l', 'lo', 'l' ]

//* n{X}
//It matches any string that contains a sequence of X number of n's
// let str = "Hellooo World! Hello W3Schools! ooooooo"; ; 
// let pattern = /o{3}/g;
// let result = str.match(pattern)
// console.log(result)
//op
//[ 'ooo', 'ooo', 'ooo' ]

//* n{X,Y}
//It matches any string that contains a sequence of X to Y number of n's
// let str = "Hellooo World! Hello W3Schools! oooooooooo"; ; 
// let pattern = /o{2,4}/g;
// let result = str.match(pattern)
// console.log(result)
//op
//[ 'ooo', 'oo', 'ooo', 'ooo' ]

//* n{X,}
//It matches any string that contains a sequence of atleast number of n's
// let str = "Hellooo World! Hello W3Schools! oooooooooo"; ; 
// let pattern = /o{2,}/g;
// let result = str.match(pattern)
// console.log(result)
//op
//[ 'ooo', 'oo', 'oooooooooo' ]


//* n$
//This returns the pattern if the sentence(not the string) ends with that pattern 
// let str = " World!  W3Schools! deed woo den pigoo"; ; 
// let pattern = /o$/g;
// let result = str.match(pattern)
// console.log(result)
//op
//[ 'o' ]


/*
||Object Properties
    lastIndex => Specifies the index at which to start the next match }=> See the example of test() 
    global => Checks whether the "g" modifier is set
    ignoreCase => Checks whether the "i" modifier is set
    multiline => Checks whether the "m" modifier is set
*/

//* global, ignoreCase, multiline
// let str = "I studied at SSN which is in Chennai. Inside the cafe. innings In"
// let patterng = /in/g;
// let resultg = patterng.global
// let patternm = /in/m;
// let resultm = patternm.multiline
// let patterni = /in/i;
// let resulti = patterni.ignoreCase
// console.log(resultg, resultm, resulti)
//op
// true true true

/*
||Object Methods
    exec() => it tests for a match in the string and returns the first match
    test() => if the pattern is present in the string then this will return true
    toString() => it returns the string value of the regex
*/

//* test
// var str = "The rain in Spain stays mainly in the plain";
// var patt1 = /ain/g;
// console.log(patt1.test(str))
// while (patt1.test(str)=== true)  {
//   console.log("'ain' found. Index now at: "+patt1.lastIndex);
// }
//op
//true
//'ain' found. Index now at: 8
// 'ain' found. Index now at: 17
// 'ain' found. Index now at: 28
// 'ain' found. Index now at: 43


//* exec
// let text = "The best things in life are free";
// let patt = new RegExp("e");
// console.log(patt.exec(text))
//op
//["e"]

//* toString
// let text = "The best things in life are free";
// let patt = new RegExp("e");
// patternStr = patt.toString()
// console.log(patternStr)
//op
//   "/e/"

let regex = () => {}
export default regex



