// Type-conversion 
// Type conversion method allow us to convert the datatype of values/data to another datatype in Js.

let x
let convetedValue = String(x)

// console.log(convetedValue)
// console.log(typeof(convetedValue))

// results for string conversion
/*
33 => "33"
true => "true"
null = "null"; undefined => "undefined"
*/

x = undefined
convetedValue = Number(x)

// console.log(convetedValue)
// console.log(typeof(convetedValue))

// result for number conversion
/*
"23" => 23
"23asd" => NaN // (Not a number)
true => 1; false => 0
"" => 0; "nam" => NaN
null => 0
undefined => NaN
*/

x = 
convetedValue = Boolean(x)

console.log(convetedValue)
console.log(typeof(convetedValue))


//result for boolean conversion
/*
undefined => false
null => false
123 => true
0 => false
-23 => true
"" => false; "abc" => true
*/

/*
Note:- all the conversion is done successfull but those conversion which do not have any logic to change the datatypes have an fixed value like 'NaN' etc.

*/