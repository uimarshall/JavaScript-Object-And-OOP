// DOT NOTATION VS SQUARE BRACKET
// Both 'sq-bracket is that dot notation' are used for updating the pties of an obj
// ===================================================================================

/**The major difference btw dot-notation and sq-bracket is that dot notation takes in properties
 * Whereas the sq-bracket sees properties sometimes as variables especially dynamic variables
 * A dynamic variable is a variable that can change its values.
 */

//  EXAMPLES

user = {
	name: "Sunny",
	email: "abe@gmail.com"
};

// Below we update user wt 'age' and 'color',
user.age = "34";
user["favcolor"] = "blue";
// ============================================================================================

// user obj now becomes:
/**user = {
	name: "Abe",
	email: "abe@gmail.com"
	age: 34,
	favcolor: "blue"
}; */

// Talking about dynamic variable

let dynamicVariable = "name";
console.log(user[dynamicVariable]); //will output 'Sunny'
console.log(user.dynamicVariable); //will throw 'undefined' bcos dot notation sees dynamicVariable as pty whreas its a variable

console.log(user);
