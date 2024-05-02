// Stirngs
//We can decleare a string in these ways:-
let god = 'Vishnu'
let godesh = `Lakshmi`
let name = "Krishna"
//   ^        ^
//   |        |
// variable  data(string)

// Methods of string (vvi):-

//#1 length
console.log(godesh.length) // output:-7

//#2 charAt
console.log(name.charAt(4)) // output :- h
//or another way
console.log(name[4])  // (indexing) output :- h

//#3 toUpperCase , toLowerCase
console.log(`${godesh.toUpperCase()} ${god.toLowerCase()}`)

//#4 indexOf 
console.log(name.indexOf('s')) // output:- 3

//#5 substring 
console.log(god.substring(2,5)) // output:- shn

//#6 trim 
// Trim method is used to remove the whitespace and new lineterminator(\n) from both starting and ending.
let x = "    Ram   "
console.log(x) // output:-     Ram
console.log(x.trim())  // output:- Ram
// ther are two methods same like trim() #1 trimStart() #2 trimEnd()
let y = "    \nRam"
x = "Ram      "
console.log(y)
console.log(y.trimStart())
console.log(x.trimEnd())

//#7 replace
//Replace method is used to replace a substring with a new string in the given string. *_*! confusing
let k = "Hare Krishna"
console.log(k) // output:- Hare Krishna
console.log(k.replace("Krishna","Rama")) // output:- Hare Rama
// here the initial value of 'k' is "Hare Krishna" and we replace the substring "Krishna" with "Rama".

//#8 include
//Include is a method by which we can check if the the substring is present in the string or not.
console.log(k.includes('Rama')) // output:- false
console.log(k.includes('Krishna')) // output:- true
//since krishna is present in the string the includes() meethod return 'true' and since Rama is not present in the string it returns 'false'

//#9 split 
// Split method is used to break the string on the basic of which character arggument you have passed inside the split method and then convert it into an array.
const a = "|| Hare Krishna Hare Rama ||"
console.log(a.split(' ')) // output:- ["||","Hare","Krishna","Hare","Rama","||"]
//let see one more example:-
let b = "Hello, i am shivam and i am 18 year old boy "
console.log(b.split(/(\d)/)) // output:- [ 'Hello, i am shivam and i am ', '1', '', '8', ' year old boy ' ]
// Let's know about \d;
// '\d' is a character class that matches any digit, ranging from 0 to 9. This character class can be used with various string methods to manipulate and extract digits from strings. 
//  \d matches the character class for digits between 0 and 9.


