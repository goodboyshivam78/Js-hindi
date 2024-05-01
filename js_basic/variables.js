const accountId= 123532;
//This is a constant we cant change the value onse we decleared it (immutable).


// A variable can defined in two ways using 'let' or 'var'.
let accountName= "Shiva";
//we use let to decleare a variable and it is mutablein nature so we can change its value after declearing it.

var accounEmail = "Shiva@google.com";
//the 'var' variable is same as 'let' variable but the key difference between them is=> 'let' vaariable have block scope (hint: {}) and 'var' variable have no defined block scope.

accountPassword = "loveyou"
//one more way to declear a variable, but we should avoid using this method.

let accountState;
//In the above cases we are declearing(define/ write the variablbe) and initialising(give/assing a value to it) the variable in same line.
// Here we only decleare a variable not initialise it any value so by default its value is 'undefine'.

// accountId = 99999; // Since this is a constant therefore we can not change its value (immutable)

accountName = "Ram";
accounEmail = "JayshreeRam@gmail.com";
accountPassword = "JayshreeRam";
//Here we are changing the values of variables.


console.log(accountId)
//method to print the value of the variable.


console.table([accountId,accounEmail,accountName,accountPassword,accountState])
//method to print the value with there index in table form.


/*
Note:- Prefer not to use the 'var' keywords for variables.
*/